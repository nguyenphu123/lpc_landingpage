import React, { useState, useEffect } from "react";

import { Table, Modal } from "@mantine/core"; // Import thêm Button

import { useDispatch, useSelector } from "react-redux";

import { companyNew, news } from "@/feature/data/newSlice";

import { loadNews } from "@/lib/loadData";

import UpdateNew from "./updateNew";

import { useUrl } from "nextjs-current-url";
import { useSession } from "next-auth/react";
import { updateNews } from "@/lib/updateData";
import ToastGenerator from "@/lib/toast-tify";

interface News {
  _id: string;

  title: string;

  date: string;

  content: string;

  description: string;

  draft: boolean;
}

function NewsTable() {
  const { data: session, status } = useSession();
  const { pathname, href } = useUrl() ?? {};
  const [selectedNews, setSelectedNews] = useState<News | null>(null);

  const [editNewsVisible, setEditNewsVisible] = useState(false);

  const [readOnlyNew, setReadOnlyNew] = useState(false);

  const newInfo = useSelector((rootState) => news(rootState));

  const newList = newInfo.newData.value.companyNews;
  const [isSucess, setIsSucess] = useState(false);
  const [sucessMessage, setSucessMessage] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    // declare the data fetching function

    const fetchNew = async () => {
      let role = "admin";

      if (newList.length == 0) {
        const newsCheck = await loadNews(
          role,
          {
            _id: 1,
            title: 1,
            titleEn: 1,
            image: 1,
            categories: 1,
            description: 1,
            meta_title: 1,
            content: 1,
            contentEn: 1,
            date: 1,
          },
          href,
        );

        dispatch(companyNew(newsCheck));
      } else {
      }
    };

    // call the function
    if (status != "loading") {
      fetchNew()
        // make sure to catch any error

        .catch(console.error);
    }
  }, []);
  const changeStatus = async (news) => {
    let newsStatusChange = JSON.parse(JSON.stringify(news));
    if (newsStatusChange["draft"]) {
      newsStatusChange["draft"] = false;
    } else {
      newsStatusChange["draft"] = true;
    }
    let returnResult = await updateNews(newsStatusChange, session);
    if (returnResult.success != undefined) {
      showToast(returnResult.msg);
    }
  };
  const showToast = (msg) => {
    setIsSucess(true);
    setSucessMessage(msg);
    setTimeout(() => {
      setIsSucess(false);
      setSucessMessage("");
    }, 10000);
  };
  const rows = newList.map((news, index) => (
    <tr key={news._id}>
      <td>{index + 1}</td>

      <td>{news.title}</td>

      {/* <td
        className=""
        dangerouslySetInnerHTML={{
          __html:
            news.content.length > 150
              ? `${news.content.slice(0, 150)}...`
              : news.content,
        }}
      ></td> */}

      <td>{news.date}</td>

      <td>{news.draft ? "true" : "false"}</td>

      <td>
        <button
          className="cursor-pointer"
          onClick={() => {
            setSelectedNews(news);

            setReadOnlyNew(true);
          }}
        >
          View
        </button>
        |{" "}
        <button
          className="cursor-pointer"
          onClick={() => handleEditClick(news)}
        >
          Edit
        </button>
        |
        <button className="cursor-pointer" onClick={() => changeStatus(news)}>
          {!news.draft ? "Disable" : "Active"}
        </button>
      </td>

      {/* <td>

      </td> */}
    </tr>
  ));
  const handleEditClick = (news: News) => {
    setSelectedNews(news);

    setEditNewsVisible(true);
  };

  const handleOnClose = () => {
    setSelectedNews(null);

    setEditNewsVisible(false);
  };

  return (
    <div>
      {isSucess ? <ToastGenerator message={sucessMessage} /> : <></>}
      <Table>
        <thead>
          <tr>
            <th>#</th>

            <th>Title</th>

            {/* <th>Content</th> */}

            <th>Date</th>

            <th>Status</th>

            <th>Action</th>
          </tr>
        </thead>

        <tbody>{rows}</tbody>
      </Table>

      <Modal
        size="1000px"
        opened={Boolean(selectedNews)}
        onClose={() => {
          setSelectedNews(null);

          setReadOnlyNew(false);
        }}
      >
        {selectedNews && readOnlyNew && (
          <div>
            <h2>{selectedNews.title}</h2>

            <p dangerouslySetInnerHTML={{ __html: selectedNews.content }}></p>

            {/* Thêm các thông tin khác của bài viết */}
          </div>
        )}
      </Modal>

      <Modal
        size="1000px"
        opened={Boolean(selectedNews)}
        onClose={() => {
          setSelectedNews(null);

          setEditNewsVisible(false);
        }}
      >
        {selectedNews && editNewsVisible && (
          <div>
            <UpdateNew New={selectedNews} />
          </div>
        )}
      </Modal>
    </div>
  );
}

export default NewsTable;
