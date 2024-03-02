import React from 'react'
import styled from 'styled-components'
import {IoLibrary} from 'react-icons/io5'
import {MdHomeFilled, MdSearch} from 'react-icons/md'
import Playlists from '../Playlists/Playlists'

export default function Sidebar() {
  return (
    <div>
      <Container>
        <div className="top__links">
          <div className='Logo'>
            <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png" alt="spotify" />
          </div>
          <ul>
            <li>
              <MdHomeFilled />
              <span>Home</span>
            </li>
            <li>
              <MdSearch />
              <span>Search</span>
            </li>
            <li>
              <IoLibrary />
              <span>Your Library</span>
            </li>
          </ul>
        </div>
        <Playlists />
      </Container>
    </div>
  )
}

const Container = styled.div`
  background-color: black;
  color: #b3b3b3;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  .top__links{
    display: flex;
    flex-direction: column;
    .logo{
      text-align: center;
      margib: 1rem 0;
    }
    img{
      max-inline-size: 80%;
      block-size: auto;
    }
  }

  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    li{
      display: flex;
      gap: 1rem;
      cursor: pointer;
      transition: 0.3s ease0in-out;
      &:hover{
        color: white;
      }
    }
  }
`;
