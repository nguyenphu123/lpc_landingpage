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

import Popup from "@/components/popup";

import AddNews from "./createNew";

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

            draft: 1,
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
    let newsStatusChange = {
      ...news,

      draft: !news.draft,
    };

    let returnResult = await updateNews(newsStatusChange, session);

    if (returnResult.success !== undefined) {
      showToast(returnResult.msg);

      let role = "admin";

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

          draft: 1,
        },

        href,
      );

      dispatch(companyNew(newsCheck));
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
    <tr key={news._id} className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}>
      <td>{index + 1}</td>

      <td>{news.title}</td>

      <td>{news.date}</td>

      <td>
        {news.draft ? (
          <span className="text-red-500 font-bold">Disable</span>
        ) : (
          <span className="text-green-500 font-bold">Active</span>
        )}
      </td>

      <td>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded mr-2"
          onClick={() => {
            setSelectedNews(news);

            setReadOnlyNew(true);
          }}
        >
          Preview
        </button>

        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-3 rounded mr-2"
          onClick={() => handleEditClick(news)}
        >
          Edit
        </button>

        <button
          className={`${
            news.draft ? "bg-yellow-500" : "bg-red-500"
          } hover:bg-red-700 text-white font-bold py-2 px-3 rounded`}
          onClick={() => changeStatus(news)}
        >
          {news.draft ? "Active" : "Disable"}
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

  const refreshNews = async () => {
    let role = "admin";

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

        draft: 1,
      },

      href,
    );

    dispatch(companyNew(newsCheck));

    setSelectedNews(null);

    setEditNewsVisible(false);
  };

  return (
    <div>
      {isSucess ? <ToastGenerator message={sucessMessage} /> : <></>}

      <Popup>
        <AddNews refreshNews={refreshNews} />
      </Popup>

      <Table>
        <thead>
          <tr>
            <th>#</th>

            <th>Title</th>

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
        {selectedNews != null &&
        readOnlyNew == true &&
        editNewsVisible == false ? (
          <div>
            <h2>{selectedNews.title}</h2>

            <p dangerouslySetInnerHTML={{ __html: selectedNews.content }}></p>

            {/* Thêm các thông tin khác của bài viết */}
          </div>
        ) : selectedNews != null &&
          editNewsVisible == true &&
          readOnlyNew == false ? (
          <div>
            <UpdateNew New={selectedNews} refreshNews={refreshNews} />
          </div>
        ) : (
          <></>
        )}
      </Modal>
    </div>
  );
}

export default NewsTable;
