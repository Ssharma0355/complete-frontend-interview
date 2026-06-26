import React, { useState } from "react";
import json from "./data.json";

function FileExp() {
  const [data, setData] = useState(json);
  console.log(data);
  const addNodeList=(id)=>{

  }

  const List = ({ list }) => {
  const [isExpland, setIsExpland] = useState({});
    return (
      <div>
        {list.map((node) => (
          <div key={node.id}>
            {node?.isFolder && (
              <button
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setIsExpland((prev) => ({
                    ...prev,
                    [node?.name]: !prev[node?.name],
                  }));
                }}
              >
                {" "}
                {isExpland?.[node.name] ? "+" : "-"}{" "}
              </button>
            )}
            <span>
              {node.name}{" "}
              {node.isFolder ? <button onClick={()=>{addNodeList(node.id)}} style={{marginLeft:"12px"}}>Add Folder</button> : ""}
            </span>
            {isExpland?.[node.name] && node?.children && (
              <div
                style={{
                  marginLeft: "20px",
                  borderTop: "1px dotted gray",
                  padding: "12px",
                }}
              >
                <List list={node.children} />
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid black",
      }}
    >
      <List list={data} />
    </div>
  );
}

export default FileExp;
