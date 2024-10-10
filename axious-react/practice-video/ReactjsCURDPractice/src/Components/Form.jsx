import React, { useEffect, useState } from "react";
import "../app.css";
import { postMethodData, putMethodData } from "../Api/PostApi";

export const Form = ({ data, setData, updateDataApi, setupdateDataApi }) => {
  const [adddata, setAddData] = useState({
    title: "",
    body: "",
  });

  let isEmpty = Object.keys(updateDataApi).length === 0;

  useEffect(() => {
    updateDataApi &&
      setAddData({
        title: updateDataApi.title || "",
        body: updateDataApi.body || "",
      });
  }, [updateDataApi]);

  const handelInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setAddData({ ...adddata, [name]: value });
  };

  const addPostData = async () => {
    const res = await postMethodData(adddata);
    console.log(res);
    if (res.status === 201) {
      setData([...data, res.data]);
      setAddData({ title: "", body: "" });
    }
  };

  const updatePostData = async () => {
    try {
      const res = await putMethodData(updateDataApi.id, adddata);
      // console.log(updateDataApi.id);
      console.log(res);
      setData((prev) => {
        return prev.map((curElm) => {
          return curElm.id === updateDataApi.id ? res.data : curElm;
        });
      });
      setAddData({ title: "", body: "" });
      setupdateDataApi({});
    } catch (error) {
      console.error(error);
      // handle error here
    }
  };

  const handelFormSubmit = (event) => {
    const action = event.nativeEvent.submitter.value;
    event.preventDefault();

    if (action === "Add") {
      addPostData();
    } else if (action === "Edit") {
      updatePostData();
    }
  };

  return (
    <div>
      <form onSubmit={handelFormSubmit}>
        <div>
          <label htmlFor="title"></label>
          <input
            type="text"
            autoComplete="off"
            id="title"
            name="title"
            placeholder="title"
            value={adddata.title}
            onChange={handelInputChange}
          />
        </div>
        <div>
          <label htmlFor="body">
            <input
              type="text"
              autoComplete="off"
              placeholder="add text"
              id="body"
              name="body"
              value={adddata.body}
              onChange={handelInputChange}
            />
          </label>
        </div>
        <button
          type="submit"
          className=" btn-edit new-btn"
          value={isEmpty ? "Add" : "Edit"}
        >
          {isEmpty ? "Add" : "Edit"}
        </button>
      </form>
    </div>
  );
};
