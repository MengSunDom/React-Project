import React, { useState } from 'react';
import { Modal, Button, Input, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { UploadChangeParam } from 'antd/es/upload/interface';

interface PublishContentModalProps {
  isModalVisible: boolean;
  handleCancel: () => void;
}

const PublishContentModal: React.FC<PublishContentModalProps> = ({ isModalVisible, handleCancel }) => {
  const [content, setContent] = useState<string>('');  // Text content
  const [imageUrl, setImageUrl] = useState<string | null>(null); // Uploaded image preview

  // Handle text content change
  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  // Handle image upload change
  const handleImageChange = (info: UploadChangeParam) => {
    if (info.file.status === 'done') {
      // Generate a local URL for image preview
      setImageUrl(URL.createObjectURL(info.file.originFileObj as Blob));
    } else if (info.file.status === 'error') {
      message.error('Image upload failed');
    }
  };

  // Handle the final upload action
  const handleUpload = () => {
    if (!content) {
      message.error('Please enter some content!');
      return;
    }

    // Simulate an upload operation (e.g., send data to an API)
    console.log('Content:', content);
    console.log('Image URL:', imageUrl);

    // Reset state after upload (optional)
    setContent('');
    setImageUrl(null);
    handleCancel(); // Close the modal after upload
  };

  return (
    <Modal
      title="Publish Content"
      visible={isModalVisible}
      onCancel={handleCancel}
      footer={null}
    >
      <div>
        <Input.TextArea
          rows={4}
          value={content}
          onChange={handleContentChange}
          placeholder="Enter content"
        />
      </div>

      <Upload
        accept="image/*"
        onChange={handleImageChange}
        showUploadList={false}
      >
        <Button icon={<UploadOutlined />}>Upload Image</Button>
      </Upload>

      {imageUrl && (
        <div style={{ marginTop: 10 }}>
          <img src={imageUrl} alt="Uploaded Preview" style={{ width: '100%', maxHeight: 200, objectFit: 'cover' }} />
        </div>
      )}

      <div style={{ marginTop: 16, textAlign: 'right' }}>
        <Button onClick={handleCancel} style={{ marginRight: 8 }}>
          Cancel
        </Button>
        <Button type="primary" onClick={handleUpload} disabled={!content}>
          Upload
        </Button>
      </div>
    </Modal>
  );
};

export default PublishContentModal;
