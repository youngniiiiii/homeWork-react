// Thinking in React

import { useState } from 'react'

// 상태
// - 검색어
// - 영화 목록
// - 걸러진 영화 목록 ???
//
// 파생된 상태
// - 걸러진 영화 목록 ???

// 1. 배열 → 리스트 렌더링
// 2. 검색 필드 → 검색어 입력
// 배열 → 필터링 된 결과 리스트 렌더링

export default function SearchList() {
  const [movieList] = useState([
    { id: 1, title: '오펜하이머' },
    { id: 2, title: '엘리멘탈' },
    { id: 3, title: '나홀로 집에' },
    { id: 4, title: '지구를 지켜라' },
    { id: 5, title: '피아니스트' },
    { id: 6, title: '집으로' },
    { id: 7, title: '아워 엘리멘탈 쇼!' },
  ])

  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  }

  // 검색된 영화 목록
  const searchedMovieList = movieList.filter((movie) => movie.title.includes(searchTerm))

  return (
    <>
      <h2>A brief history of React</h2>
      <div>
        <label htmlFor="search" className="sr-only">
          검색
        </label>
        <input value={searchTerm} onChange={handleSearch} placeholder="Search" type="search" name="search" id="search" />
      </div>
      <ul>
        {searchedMovieList.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </>
  )
}
