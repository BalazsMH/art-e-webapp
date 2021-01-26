import React, { useContext, useState, useEffect } from 'react';
import { ArtBrowserContext } from './ArtBrowserContext';
import ArtCard from './ArtCard';
import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios';

const PictureBrowser = () => {
    const {query, pageNumber, setPageNumber} = useContext(ArtBrowserContext);
    const [artData, setArtData] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const resultsPerPage = 20;

    useEffect(() => {
        artData.length = 0;
        setArtData(artData);
        console.log("Artadata supposed to be empty:" + artData);
        fetchMoreData();
    }, [query])

    const fetchMoreData = () => {
        axios({
            method: 'GET',
            url:'https://www.rijksmuseum.nl/api/en/collection?key=Gz1ZRsyI&format=json',
            params: {p: pageNumber,
                    ps: resultsPerPage,
                    imgonly: true,
                    culture: "en",
                    ...(query.term ? {q : query.term} : {}),
                    ...(query.involvedMaker ? {q : query.involvedMaker} : {}),
                    ...(query.technique ? {q : query.technique} : {}),
                    ...(query.datingPeriod ? {q : query.datingPeriod} : {})
                    //TODO:Allow users to select artist from a drop-down list only by using the facets.
                }
        }).then(res => {
            console.log(res);
            setArtData( () => {
                return [...artData, ...res.data.artObjects];
            });
            setHasMore(res.data.artObjects.length > 0);
            setPageNumber(pageNumber + 1);
            console.log("Load complete..");
        })
        .catch(e => {
            console.log(e);
        })
    }

    return (
        <BrowserDiv>
            <InfiniteScroll
                dataLength={artData.length} //This is important field to render the next data
                next={fetchMoreData}
                hasMore={hasMore}
                loader={<div>Please wait..</div>}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                    <b>No more results.</b>
                    </p>
                }>
                {artData.length !== 0 ? artData
                    .filter((artPiece) => artPiece.hasImage)
                    .map((artPiece, index) => <ArtCard hasMore={hasMore} lastItem={artData.length === index + 1} data={artPiece} key={index}></ArtCard>)
                : <div>No results found for the term.</div>}
            </InfiniteScroll>
        </BrowserDiv>
    )
}

const BrowserDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
`;

export default PictureBrowser;