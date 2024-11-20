"use client";
import React, { useState } from "react";
import { marked } from "marked";
import { Button } from "antd";
import { EditOutlined } from '@ant-design/icons'

const MarkdownEditor = () => {
  const [markdownContent, setMarkdownContent] = useState<string>("# Hello, World!");
  const [isEditing, setIsEditing] = useState<boolean>(false); // State to toggle between preview and edit mode

  // Handle live updates to the markdown content
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdownContent(e.target.value);
  };

  // Render the markdown content to HTML using the `marked` library
  const renderMarkdown = (content: string) => {
    return marked(content); // Converts markdown to HTML
  };

  // Toggle between edit and preview modes
  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="items-center space-y-4">
      <div className="w-0 h-0" style={{float: "right"}}>
        {!isEditing ? <EditOutlined onClick={toggleEditMode} />: <Button type="primary" onClick={toggleEditMode}>Finish</Button>}
      </div>
      {/* Conditionally Render based on edit mode */}
      {isEditing ? (
        <div className="flex space-x-4 w-full">
          <div className="w-1/2">
            <h2>Markdown Editor</h2>
            <textarea
              className="w-full h-96 border p-4"
              value={markdownContent}
              onChange={handleInputChange}
            />
          </div>

          <div className="w-1/2">
            <h2>Preview</h2>
            <div
              className="w-full h-96 border overflow-auto"
              dangerouslySetInnerHTML={{ __html: renderMarkdown(markdownContent) }}
            />
          </div>
        </div>
      ) : (
        <div
          className="w-full h-96 border p-2 overflow-auto"
          dangerouslySetInnerHTML={{ __html: renderMarkdown(markdownContent) }}
        />
      )}
    </div>
  );
};

export default MarkdownEditor;
