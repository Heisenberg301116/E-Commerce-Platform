import React from "react";
import styled from "styled-components";

const StyledUploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem 0;
`;

const StyledInput = styled.input`
  display: none;
`;

const StyledLabel = styled.label`
  padding: 0.5rem;
  font-size: 1.05rem;
  font-weight: 500;
  background-color: #d4d4d6;
  border: 2px solid grey;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
  display: inline-block;

  &:hover {
    background-color: silver;
  }
`;

const PreviewContainerDiv = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
`;

const ImagePreviewDiv = styled.div`
  position: relative;
  padding: 1rem 1rem 0 0;
`;

const StyledImage = styled.img`
    width: 5rem;
    height: 5rem;
    border: 2px solid grey;
`;

const RemoveButton = styled.button`
  position: absolute;
  top: 0px;
  right: 0px;
  background-color: #282829;
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  padding: 0.2rem;
  font-size: 1.5rem;
  line-height: 0;
  width: 1.5rem;
  height: 1.5rem;
`;

const UploadImages = ({ imagesArr, setImagesArr, uploadedimages, setuploadedimages, setdeleteImgsArr }) => {

    const handleImageUpload = (e) => {
        const files = Array.from(e.target.files);
        setuploadedimages((prev) => [...prev, ...files])
    };

    const handleRemoveUploadedImage = (index) => {
        setuploadedimages((prevImages) => prevImages.filter((_, i) => i !== index));
    };

    const handleRemoveDatabaseImage = (index) => {
        setdeleteImgsArr((prev) => [...prev, imagesArr[index]])
        setImagesArr((prevImages) => prevImages.filter((_, i) => i !== index));
    };

    return (
        <>
            <StyledUploadContainer>
                <div style={{ margin: '1rem 0 0.5rem 0' }}>
                    <StyledInput
                        type="file"
                        id="fileUpload"
                        multiple
                        accept="image/*"
                        onChange={handleImageUpload}
                    />

                    <StyledLabel htmlFor="fileUpload">Upload Images</StyledLabel>
                </div>

                <PreviewContainerDiv>
                    {imagesArr.map((image, index) => (
                        <ImagePreviewDiv key={index}>

                            {/* {index === 0 ?
                                <StyledImage src={require(`../../${image}`)} alt={`Image ${index}`} />
                                :
                                <StyledImage src={image} alt={`Image ${index}`} />
                            } */}

                            {
                                <StyledImage src={require(`../../${image}`)} alt={`Image ${index}`} />
                            }

                            <RemoveButton onClick={() => handleRemoveDatabaseImage(index)}>
                                ×
                            </RemoveButton>
                        </ImagePreviewDiv>
                    ))}


                    {uploadedimages.map((image, index) => (
                        <ImagePreviewDiv key={index}>

                            <StyledImage src={URL.createObjectURL(image)} alt={`Image ${index}`} />

                            <RemoveButton onClick={() => handleRemoveUploadedImage(index)}>
                                ×
                            </RemoveButton>
                        </ImagePreviewDiv>
                    ))}

                </PreviewContainerDiv>
            </StyledUploadContainer>
        </>
    );
};

export default UploadImages;