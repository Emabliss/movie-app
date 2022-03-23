import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { initialState } from '../helper/data'

const Home = ({ moviesList }) => {
  const [searchValue, setSearchValue] = useState('')
  const [data, setData] = useState(initialState)

  useEffect(() => {
    const getMovieRequest = async (searchValue) => {
      const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=17f2850a`
      const res = await axios.get(url)
      res.data.Search && setData(res.data.Search)
    }
    getMovieRequest(searchValue)
  }, [searchValue])

  const notSeries = data.filter((d) => d.Type !== 'series')

  const series = data.filter((d) => d.Type === 'series')

  return (
    <div className="pb-67px">
      <Head>
        <title>Movie App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex h-16 items-center bg-darkgray px-77px md:h-header">
        <div className="flex h-10 w-28 items-center justify-center border-2 text-xl text-lightgray md:h-logo md:w-logo md:text-3xl">
          MyAppTest
        </div>
      </div>
      <div className="box-border h-80 bg-[url('/img/background.png')] bg-cover bg-no-repeat px-77px pt-24 pb-159px md:h-hero md:pt-109px">
        <div className="leading-11 h-showcase w-32 text-5xl font-semibold text-lightgray md:w-showcase md:text-8xl md:leading-12">
          Watch Something Incredible.
        </div>
      </div>
      <div className="overflow-hidden">
        <div className=" mx-auto mt-63px mb-6 flex w-80% flex-col md:w-90%">
          <label>Search</label>
          <input
            type="text"
            className="box-border h-search w-full border-2 border-gray-600 px-3 outline-none md:w-search"
            onChange={(e) => {
              if (searchValue.length === 1) {
                setData(initialState)
              }
              setSearchValue(e.target.value)
            }}
            value={searchValue}
          />
        </div>
        <div className="m-auto w-3/4 md:w-90%">
          <h2 className="mb-2 text-2xl">{notSeries[0]?.Type}</h2>
          <div className="flex flex-col text-white md:flex-row md:space-x-13px">
            {notSeries?.map((d) => (
              <div
                className="mb-4 grid h-box w-full place-content-center rounded-sm text-lg text-white transition-all hover:scale-105 md:mb-0 md:w-1/4"
                key={d.Title}
                style={{
                  background: `url(${d.Poster})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                }}
              >
                {d.Title}
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-8 w-3/4 md:w-90%">
          <h2 className="mb-2 text-2xl">{series[0]?.Type}</h2>
          <div className="flex flex-col text-white md:flex-row md:space-x-13px">
            {series?.map((d) => (
              <div
                className="mb-4 grid h-box w-full place-content-center rounded-sm text-white transition-all hover:scale-105 md:mb-0 md:w-1/4"
                key={d.Title}
                style={{
                  background: `url(${d.Poster})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                }}
              >
                {d.Title}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
