import React from 'react';
import styled from 'styled-components';

const SectionMenu = styled.section`
    position: relative;
	display: flex;
	width: 100%;
    &:after {
		content: '';
		padding-top: 210px;
	}
`;

const ImgBanner = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const BannerPage = ({src, alt}) => (
    <SectionMenu>
        <ImgBanner src={src} alt={alt}/>
    </SectionMenu>
    );