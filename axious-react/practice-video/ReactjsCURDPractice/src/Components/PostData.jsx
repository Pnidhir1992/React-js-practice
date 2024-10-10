// import React from "react";
import React, { useEffect, useState } from "react";
import { deleteMethodData, getMethodData } from "../Api/PostApi";
import { Form } from "./Form";
import "../App.css";

export const PostData = () => {
  const [data, setData] = useState([]);

  const [updateDataApi, setupdateDataApi] = useState({});

  //console.log(getMethodData());

  const getPostData = async () => {
    try {
      const res = await getMethodData();
      // console.log(res);
      // console.log(res.data);
      setData(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPostData();
  }, []);

  const HandelDeletePost = async (id) => {
    try {
      const res = await deleteMethodData(id);

      if (res.status === 200) {
        const newUpdatepost = data.filter((curelm) => {
          return curelm.id !== id;
        });
        console.log("your ID iS Delete :-", newUpdatepost);
        setData(newUpdatepost);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handeUpdatepost = (curElm) => setupdateDataApi(curElm);

  return (
    <div>
      <section className="flex">
        <Form
          data={data}
          setData={setData}
          updateDataApi={updateDataApi}
          setupdateDataApi={setupdateDataApi}
        />
      </section>
      <section className="section-post">
        <ol>
          {data.map((curElm) => {
            // console.log(curElm);
            const { id, title, body } = curElm;
            return (
              <li key={id}>
                <p>Title :- {title}</p>
                <p>Body :-{body}</p>
                <button
                  className="btn-edit"
                  onClick={() => handeUpdatepost(curElm)}
                >
                  Edit
                </button>
                <button
                  className="btn-delete"
                  onClick={() => HandelDeletePost(id)}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ol>
      </section>
    </div>
  );
};
