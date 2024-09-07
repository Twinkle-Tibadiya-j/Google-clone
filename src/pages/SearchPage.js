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
  console.log(data);
  

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
        About {data?.searchInformation?.formattedTotalResults || '0'} results (0.57) for {term}
        </p>
        <div className="searchPage_result">
          <a href="" className="searchPage_resultLink">
            <img src="data:image/png;base64,
            iVBORw0KGgoAAAANSUhEUgAAABwAAAAc
            CAMAAABF0y+mAAAAS1BMVEX///+k3Op3z
            eGN1OXM6/Pc8feX2Oec2ej0+/xix958z+
            LH6fKz4e1YxNzk9Phvy+BJwNrA5vCF0eT
            R7fS34+4/vtno9vkzvNfx+vwXKPc3AAAB
            EklEQVR4AbXRRaLdMAxA0Rsy21JASfa/0
            j6n7efpPwMzSvyyYZzmXi9u9IHPYsql1h
            ZEhzwpn6zxKVWHXm8DH02ll7vW46kjH40
            ZWOwMugJN+SjNtKziXLJ14ax8tEWrupUX
            Z/WKkXerVWGtPNLAVK28bavLqdgCd4Nw3
            bKfUXiUCFTZYDBLr1IMSBOdLkCxk2C16
            g460Q+gswYcFrj75AzV83KFXvoRiNGD
            MxU4qv4b7URCsPs6Ydmfk+LOpIEH/pKR
            IjzchBObeBNGtdGGed/nYqNqPPkg5TsP
            GkXE/Hq2ykfjDGQNxOF74Lejl6WK+y
            Flx9jLRW3utXd8or7tyeZFJbdy3Xxyb
            xoLL4fo2PhVfwB6eg3nGSu+JgAAAABJ
            RU5ErkJggg==" className="searchPage_resultImage"/>
            github.com
          </a>
          <a href="" className="searchPage_resultTitle">
            <h2>React Documentation</h2>
          </a>
          <p className="searchPage_resultDescription">This page is an overview of the React documentation and related resources. React is a JavaScript library for building user interfaces.</p>
        </div>
      </div>
        )}
    </div>
  )
}

export default SearchPage