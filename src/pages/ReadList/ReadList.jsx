import React, { useEffect } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getToRedBook } from "../../Utility/addToDB";

const ReadList = () => {
  const data = useLoaderData();
  useEffect(() => {
    const storeBookData = getToRedBook();
    const convertedStoredBook = storeBookData.map((id) => parseInt(id));
    const myReadList = data.filter(book =>)
  }, []);
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Read Book List </Tab>
          <Tab>My Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2>Book i Read</h2>
        </TabPanel>
        <TabPanel>
          <h2>My Wish List</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
