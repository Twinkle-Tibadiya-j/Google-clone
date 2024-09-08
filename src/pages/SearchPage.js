import React, { useState } from 'react'
import Search from './SearchInput';
import SearchIcon from '@mui/icons-material/Search';
import DescriptionIcon from '@mui/icons-material/Description';
import ImageIcon from '@mui/icons-material/Image';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';
import "./searchPage.css";
import { useStateValue } from '../StateProvider';
import useGoogleSearch from '../useGoogleSearch';

function SearchPage() {
  const [{term}] = useStateValue();
    
  const {data} = useGoogleSearch(term);

  return (
    <div className="searchPage">
      <div className="searchPage_header">
        <Link to="/">
          <img src="https://images.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"></img>
        </Link>
        <div className="searchPage_headerBody">
          <Search hidebuttons />

          <div className="seachPage_options">
            <div className="searchPage_optionsLeft">
              <div className="searchPage_option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>

              <div className="searchPage_option">
                <DescriptionIcon />
                <Link to="/all">News</Link>
              </div>

              <div className="searchPage_option">
                <ImageIcon />
                <Link to="/all">Images</Link>
              </div>

              <div className="searchPage_option">
                <LocalOfferIcon />
                <Link to="/all">Shopping</Link>
              </div>

              <div className="searchPage_option">
                <AddLocationIcon />
                <Link to="/all">Maps</Link>
              </div>

              <div className="searchPage_option">
                <MoreVertIcon />
                <Link to="/all">More</Link>
              </div>
            </div>

            <div className="searchPage_optionsRight">
              <div className="searchPage_option">
                <Link to="/all">Settings</Link>
              </div>
              <div className="searchPage_option">
                <Link to="/all">Tools</Link>
              </div>
            </div>

          </div>

        </div>
      </div>

      { 
        term && (
      <div className="searchPage_results">
        <p className="seachPage_resultCount">
        About {data?.searchInformation?.formattedTotalResults} results ( {data?.searchInformation?.formattedSearchTime}seconds) for {term}
        </p>
      {
  data?.items?.length > 0 && data.items.map((item) => (
    <div className="searchPage_result" key={item.link}>
      <a href={item.link} className="searchPage_resultLink">
        {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
          <img 
            src={item.pagemap.cse_image[0].src} 
            className="searchPage_resultImage"
            style={{height:"50px",width:"90px"}}
            alt=""
          />
        )}
        {item.displayLink}
      </a>
      <a href={item.link} className="searchPage_resultTitle">
        <h2>{item.title}</h2>
      </a>
      <p className="searchPage_resultDescription">
        {item.snippet}
      </p>
    </div>
  ))
}

      </div>
        )}
    </div>
  )
}

export default SearchPage