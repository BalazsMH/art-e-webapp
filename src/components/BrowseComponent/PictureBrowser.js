import React, { useContext, useState, useEffect } from 'react';
import { ArtBrowserContext } from './ArtBrowserContext';
import ArtCard from './ArtCard';
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios';
import { GridContainer } from '../Styles.js';

const PictureBrowser = () => {
    const {query, pageNumber, setPageNumber} = useContext(ArtBrowserContext);
    const [artData, setArtData] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const resultsPerPage = 20;

    useEffect(() => {
        artData.length = 0;
        setArtData(artData);
        fetchMoreData();
    }, [query])

    const fetchMoreData = () => {
        axios({
            method: 'GET',
            url:'http://localhost:8080/api/getArtData',
            params: {p: pageNumber,
                    ps: resultsPerPage,
                    imgonly: true,
                    culture: "en",
                    ...(query.term ? {q : query.term} : {}),
                    ...(query.involvedMaker ? {involvedMaker : query.involvedMaker} : {}),
                    ...(query.technique ? {technique : query.technique} : {}),
                    ...(query.datingPeriod ? {"f.dating.period" : query.datingPeriod} : {})
                    //TODO:Allow users to select artist from a drop-down list only by using the facets.
                }
        }).then(res => {
            setArtData( () => {
                return [...artData, ...res.data.artObjects];
            });
            setHasMore(res.data.artObjects.length > 0);
            setPageNumber(pageNumber + 1);
        })
        .catch(e => {
            console.log(e);
        })
    }

    return (
        <div>
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
                    <GridContainer>   
                    {artData.length !== 0 ? artData
                        .filter((artPiece) => artPiece.hasImage)
                        .map((artPiece, index) => <ArtCard hasMore={hasMore} lastItem={artData.length === index + 1} data={artPiece} key={index}></ArtCard>)
                    : <div>No results found for the term.</div>}
                    </GridContainer>
            </InfiniteScroll>
        </div>
    )
}

export default PictureBrowser;
