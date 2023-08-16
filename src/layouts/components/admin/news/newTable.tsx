import React, { useState, useEffect } from "react";

import { Table, Modal, Button } from "@mantine/core"; // Import thêm Button
import { useDispatch, useSelector } from "react-redux";
import { companyNew, news } from "@/feature/data/newSlice";
import { loadNews } from "@/lib/loadData";

// import axios from "axios";

// import Demo from "../../app/dashboard/news/page";

interface News {
  _id: string;

  title: string;

  date: string;

  content: string;

  description: string;

  draft: boolean;
}

function NewsTable() {
  const [selectedNews, setSelectedNews] = useState<News | null>(null);

  const [addNewsVisible, setAddNewsVisible] = useState(false);

  const newInfo = useSelector((rootState) => news(rootState));

  const newList = newInfo.newData.value.companyNews;
  const dispatch = useDispatch();
  useEffect(() => {
    // declare the data fetching function
    const fetchNew = async () => {
      let role = "admin";
      if (newList.length == 0) {
        const newsCheck = await loadNews(role);
        dispatch(companyNew(newsCheck));
      } else {
      }
    };
    // call the function
    fetchNew()
      // make sure to catch any error
      .catch(console.error);
  }, []);

  // const handleEditClick = (news: News) => {

  //   setSelectedNews(news);

  //   setEditNewsVisible(true);

  // };

  const rows = newList.map((news, index) => (
    <tr key={news._id}>
      <td>{index + 1}</td>

      <td>{news.title}</td>

      <td>{news.description}</td>

      <td>
        {news.content.length > 150
          ? `${news.content.slice(0, 150)}...`
          : news.content}
      </td>

      <td>{news.date}</td>

      <td>{news.draft}</td>

      <td>
        <button onClick={() => setSelectedNews(news)}>View</button>

        <button>Edit</button>
      </td>

      <td>
        {/* <button onClick={() => handleEditClick(news)}>Edit</button> */}
      </td>
    </tr>
  ));

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>#</th>

            <th>Title</th>

            <th>Description</th>

            <th>Content</th>

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
        onClose={() => setSelectedNews(null)}
      >
        {selectedNews && (
          <div>
            <h2>{selectedNews.title}</h2>

            <p>{selectedNews.content}</p>

            {/* Thêm các thông tin khác của bài viết */}
          </div>
        )}
      </Modal>

      <Modal
        size="1000px"
        opened={addNewsVisible}
        onClose={() => setAddNewsVisible(false)}
      >
        {/* <Demo onClose={() => setAddNewsVisible(false)} /> */}
      </Modal>

      {/* <Modal

        size="1400px"

        opened={editNewsVisible}

        onClose={() => {

          setEditNewsVisible(false);

          setSelectedNews(null);

        }}

      >

        {selectedNews && (

          <Demo

            initialValues={selectedNews}

            onClose={() => setEditNewsVisible(false)}

          />

        )}

      </Modal> */}
    </div>
  );
}

export default NewsTable;
