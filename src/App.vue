<template>
  <div class="flex flex-col h-screen text-sm text-gray-400">
    <div class="flex-1 flex overflow-y-hidden">
      <div
        class="sidebar bg-gray-900-spotify w-48 flex-none flex flex-col justify-between font-semibold"
      >
        <ul class="py-6">
          <li class="border-l-4 border-green-600">
            <a href="#" class="flex items-center mx-4 mt-4 group">
              <svg
                class="text-white group-hover:text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                width="24"
                height="24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <span class="ml-2 mt-2 text-white group-hover:text-gray-600"
                >Home</span
              >
            </a>
          </li>
          <li class="">
            <a href="#" class="flex items-center mx-4 mt-4 group">
              <svg
                class="text-white group-hover:text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                width="24"
                height="24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z"
                />
              </svg>
              <span class="ml-2 mt-2 text-white group-hover:text-gray-600"
                >Browse</span
              >
            </a>
          </li>
          <li class="">
            <a href="#" class="flex items-center mx-4 mt-4 group">
              <svg
                class="text-white group-hover:text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                width="24"
                height="24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
                />
              </svg>
              <span class="ml-2 mt-2 text-white group-hover:text-gray-600"
                >Radio</span
              >
            </a>
          </li>
        </ul>
        <div class="sidebar-middle overflow-y-auto px-5 mt-2">
          <h3
            class="uppercase tracking-widest text-gray-500 font-normal text-xs"
          >
            Your Library
          </h3>
          <ul class="leading-loose">
            <li class="truncate">
              <a href="#" class="hover:text-white">Made For You</a>
            </li>
            <li class="truncate">
              <a href="#" class="hover:text-white">Recently Played</a>
            </li>
            <li class="truncate">
              <a href="#" class="hover:text-white">Liked Songs</a>
            </li>
            <li class="truncate">
              <a href="#" class="hover:text-white">Albums</a>
            </li>
            <li class="truncate">
              <a href="#" class="hover:text-white">Artists</a>
            </li>
            <li class="truncate">
              <a href="#" class="hover:text-white">Podcasts</a>
            </li>
          </ul>
          <h3
            class="uppercase tracking-widest text-gray-500 font-normal text-xs mt-6"
          >
            Playlists
          </h3>
          <ul class="leading-loose font-normal">
            <li class="truncate">
              <a href="#" class="hover:text-white">Acoustic Hits</a>
            </li>
            <li class="truncate">
              <a href="#" class="hover:text-white">Acoustic Covers</a>
            </li>
            <li class="truncate">
              <a href="#" class="hover:text-white">Discover Weekly</a>
            </li>
            <li class="truncate">
              <a href="#" class="hover:text-white">Hot Hits Canada</a>
            </li>
            <li class="truncate">
              <a href="#" class="hover:text-white"
                >90's Hip-Hop Non Stop Long Varient</a
              >
            </li>
            <li class="truncate">
              <a href="#" class="hover:text-white">90's Smash Hits</a>
            </li>
            <li class="truncate">
              <a href="#" class="hover:text-white">TIGF</a>
            </li>
            <li class="truncate">
              <a href="#" class="hover:text-white">Mint Canada</a>
            </li>
            <li class="truncate">
              <a href="#" class="hover:text-white">Hip-Hop Central</a>
            </li>
            <li class="truncate">
              <a href="#" class="hover:text-white">R&amp;B Right now</a>
            </li>
            <li class="truncate">
              <a href="#" class="hover:text-white">I Love My 90's R&amp;B</a>
            </li>
            <li class="truncate">
              <a href="#" class="hover:text-white">Are R&amp;B Be</a>
            </li>
            <li class="truncate">
              <a href="#" class="hover:text-white">Today's Top Hits</a>
            </li>
            <li class="truncate">
              <a href="#" class="hover:text-white">Get Trunt</a>
            </li>
            <li class="truncate">
              <a href="#" class="hover:text-white">iTunes</a>
            </li>
          </ul>
        </div>
        <div
          class="border-t border-gray-800 h-16 px-4 py-2 flex items-center group"
        >
          <svg
            class="group-hover:text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width="24"
            height="24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <a
            href="#"
            class="font-normal text-gray-500 ml-2 group-hover:text-white"
            >New Playlist</a
          >
        </div>
      </div>
      <div class="bg-gray-800-spotify flex-1 flex flex-col">
        <div class="top-bar flex items-center justify-between px-4 py-2">
          <div class="flex items-center">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                width="20"
                height="20"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                width="20"
                height="20"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
            <div class="ml-4 relative">
              <input
                type="text"
                placeholder="Search"
                name=""
                id=""
                class="bg-white text-gray-800 placeholder-gray-800 rounded-full px-3 pl-8 py-1"
              />
              <div class="absolute top-0">
                <svg
                  class="text-gray-800 h-6 w-6 pt-1 pl-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  width="15"
                  height="15"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div class="flex items-center">
            <button>
              <svg
                class="hover:text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                width="30"
                height="30"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
            <a href="#" class="ml-2 hover:underline hover:text-white"
              >nomanmajeed</a
            >
            <button class="ml-4">
              <svg
                class="hover:text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                width="20"
                height="20"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        </div>
        <div class="content-area overflow-y-auto">
          <div class="container mx-auto">
            <h2 class="mt-24 text-5xl font-semibold text-white">Home</h2>
            <div class="mt-8">
              <h3 class="font-normal text-xl border-b border-gray-900 pb-2">
                Recently Played
              </h3>
              <div class="flex items-center mt-4 -mx-4">
                <div class="w-1/5 px-4">
                  <div>
                    <a href="#"
                      ><img
                        class="w-60 h-70"
                        src="https://images.unsplash.com/photo-1533274684449-a00e3142ce2e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                        alt="album cover"
                    /></a>
                  </div>
                  <div>
                    <a
                      href="#"
                      class="font-semibold block hover:text-white mt-2"
                      >Acoustic Hits</a
                    >
                    <div class="text-gray-500 mt-2">
                      Amazing Acoustic Hits updated every day.
                    </div>
                    <div
                      class="uppercase tracking-widest text-xs text-gray-500 mt-2"
                    >
                      1053 Followers
                    </div>
                  </div>
                </div>
                <div class="w-1/5 px-4">
                  <div>
                    <a href="#"
                      ><img
                        class="w-60 h-70"
                        src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                        alt="album cover"
                    /></a>
                  </div>
                  <div>
                    <a
                      href="#"
                      class="font-semibold block hover:text-white mt-2"
                      >Acoustic Covers</a
                    >
                    <div class="text-gray-500 mt-2">
                      Amazing Acoustic Covers updated every day.
                    </div>
                    <div
                      class="uppercase tracking-widest text-xs text-gray-500 mt-2"
                    >
                      2222 Followers
                    </div>
                  </div>
                </div>
                <div class="w-1/5 px-4">
                  <div>
                    <a href="#"
                      ><img
                        class="w-60 h-70"
                        src="https://images.unsplash.com/photo-1518609878373-06d740f60d8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                        alt="album cover"
                    /></a>
                  </div>
                  <div>
                    <a
                      href="#"
                      class="font-semibold block hover:text-white mt-2"
                      >Hot Hits Canada</a
                    >
                    <div class="text-gray-500 mt-2">
                      Amazing Hot Hits Canada updated every day.
                    </div>
                    <div
                      class="uppercase tracking-widest text-xs text-gray-500 mt-2"
                    >
                      1215 Followers
                    </div>
                  </div>
                </div>
                <div class="w-1/5 px-4">
                  <div>
                    <a href="#"
                      ><img
                        class="w-60 h-70"
                        src="https://images.unsplash.com/photo-1530419248307-be80b9468e77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                        alt="album cover"
                    /></a>
                  </div>
                  <div>
                    <a
                      href="#"
                      class="font-semibold block hover:text-white mt-2"
                      >90's Smash Hits</a
                    >
                    <div class="text-gray-500 mt-2">
                      Amazing 90's Smash Hits updated every day.
                    </div>
                    <div
                      class="uppercase tracking-widest text-xs text-gray-500 mt-2"
                    >
                      1853 Followers
                    </div>
                  </div>
                </div>
                <div class="w-1/5 px-4">
                  <div>
                    <a href="#"
                      ><img
                        class="w-60 h-50"
                        src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                        alt="album cover"
                    /></a>
                  </div>
                  <div>
                    <a
                      href="#"
                      class="font-semibold block hover:text-white mt-2"
                      >Are R&B Be</a
                    >
                    <div class="text-gray-500 mt-2">
                      Amazing Are R&B Be updated every day.
                    </div>
                    <div
                      class="uppercase tracking-widest text-xs text-gray-500 mt-2"
                    >
                      1083 Followers
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-8">
              <h3 class="font-normal text-xl border-b border-gray-900 pb-2">
                Your Heavy Rotation
              </h3>
              <div class="flex items-center mt-4 -mx-4">
                <div class="w-1/5 px-4">
                  <div>
                    <a href="#"
                      ><img
                        class="w-60 h-70"
                        src="https://images.unsplash.com/photo-1533274684449-a00e3142ce2e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                        alt="album cover"
                    /></a>
                  </div>
                  <div>
                    <a
                      href="#"
                      class="font-semibold block hover:text-white mt-2"
                      >Acoustic Hits</a
                    >
                    <div class="text-gray-500 mt-2">
                      Amazing Acoustic Hits updated every day.
                    </div>
                    <div
                      class="uppercase tracking-widest text-xs text-gray-500 mt-2"
                    >
                      1053 Followers
                    </div>
                  </div>
                </div>
                <div class="w-1/5 px-4">
                  <div>
                    <a href="#"
                      ><img
                        class="w-60 h-70"
                        src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                        alt="album cover"
                    /></a>
                  </div>
                  <div>
                    <a
                      href="#"
                      class="font-semibold block hover:text-white mt-2"
                      >Acoustic Covers</a
                    >
                    <div class="text-gray-500 mt-2">
                      Amazing Acoustic Covers updated every day.
                    </div>
                    <div
                      class="uppercase tracking-widest text-xs text-gray-500 mt-2"
                    >
                      2222 Followers
                    </div>
                  </div>
                </div>
                <div class="w-1/5 px-4">
                  <div>
                    <a href="#"
                      ><img
                        class="w-60 h-70"
                        src="https://images.unsplash.com/photo-1518609878373-06d740f60d8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                        alt="album cover"
                    /></a>
                  </div>
                  <div>
                    <a
                      href="#"
                      class="font-semibold block hover:text-white mt-2"
                      >Hot Hits Canada</a
                    >
                    <div class="text-gray-500 mt-2">
                      Amazing Hot Hits Canada updated every day.
                    </div>
                    <div
                      class="uppercase tracking-widest text-xs text-gray-500 mt-2"
                    >
                      1215 Followers
                    </div>
                  </div>
                </div>
                <div class="w-1/5 px-4">
                  <div>
                    <a href="#"
                      ><img
                        class="w-60 h-70"
                        src="https://images.unsplash.com/photo-1530419248307-be80b9468e77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                        alt="album cover"
                    /></a>
                  </div>
                  <div>
                    <a
                      href="#"
                      class="font-semibold block hover:text-white mt-2"
                      >90's Smash Hits</a
                    >
                    <div class="text-gray-500 mt-2">
                      Amazing 90's Smash Hits updated every day.
                    </div>
                    <div
                      class="uppercase tracking-widest text-xs text-gray-500 mt-2"
                    >
                      1853 Followers
                    </div>
                  </div>
                </div>
                <div class="w-1/5 px-4">
                  <div>
                    <a href="#"
                      ><img
                        class="w-60 h-50"
                        src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                        alt="album cover"
                    /></a>
                  </div>
                  <div>
                    <a
                      href="#"
                      class="font-semibold block hover:text-white mt-2"
                      >Are R&B Be</a
                    >
                    <div class="text-gray-500 mt-2">
                      Amazing Are R&B Be updated every day.
                    </div>
                    <div
                      class="uppercase tracking-widest text-xs text-gray-500 mt-2"
                    >
                      1083 Followers
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-8">
              <h3 class="font-normal text-xl border-b border-gray-900 pb-2">
                Top Rated Songs
              </h3>
              <div class="flex items-center mt-4 -mx-4">
                <div class="w-1/5 px-4">
                  <div>
                    <a href="#"
                      ><img
                        class="w-60 h-70"
                        src="https://images.unsplash.com/photo-1533274684449-a00e3142ce2e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                        alt="album cover"
                    /></a>
                  </div>
                  <div>
                    <a
                      href="#"
                      class="font-semibold block hover:text-white mt-2"
                      >Acoustic Hits</a
                    >
                    <div class="text-gray-500 mt-2">
                      Amazing Acoustic Hits updated every day.
                    </div>
                    <div
                      class="uppercase tracking-widest text-xs text-gray-500 mt-2"
                    >
                      1053 Followers
                    </div>
                  </div>
                </div>
                <div class="w-1/5 px-4">
                  <div>
                    <a href="#"
                      ><img
                        class="w-60 h-70"
                        src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                        alt="album cover"
                    /></a>
                  </div>
                  <div>
                    <a
                      href="#"
                      class="font-semibold block hover:text-white mt-2"
                      >Acoustic Covers</a
                    >
                    <div class="text-gray-500 mt-2">
                      Amazing Acoustic Covers updated every day.
                    </div>
                    <div
                      class="uppercase tracking-widest text-xs text-gray-500 mt-2"
                    >
                      2222 Followers
                    </div>
                  </div>
                </div>
                <div class="w-1/5 px-4">
                  <div>
                    <a href="#"
                      ><img
                        class="w-60 h-70"
                        src="https://images.unsplash.com/photo-1518609878373-06d740f60d8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                        alt="album cover"
                    /></a>
                  </div>
                  <div>
                    <a
                      href="#"
                      class="font-semibold block hover:text-white mt-2"
                      >Hot Hits Canada</a
                    >
                    <div class="text-gray-500 mt-2">
                      Amazing Hot Hits Canada updated every day.
                    </div>
                    <div
                      class="uppercase tracking-widest text-xs text-gray-500 mt-2"
                    >
                      1215 Followers
                    </div>
                  </div>
                </div>
                <div class="w-1/5 px-4">
                  <div>
                    <a href="#"
                      ><img
                        class="w-60 h-70"
                        src="https://images.unsplash.com/photo-1530419248307-be80b9468e77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                        alt="album cover"
                    /></a>
                  </div>
                  <div>
                    <a
                      href="#"
                      class="font-semibold block hover:text-white mt-2"
                      >90's Smash Hits</a
                    >
                    <div class="text-gray-500 mt-2">
                      Amazing 90's Smash Hits updated every day.
                    </div>
                    <div
                      class="uppercase tracking-widest text-xs text-gray-500 mt-2"
                    >
                      1853 Followers
                    </div>
                  </div>
                </div>
                <div class="w-1/5 px-4">
                  <div>
                    <a href="#"
                      ><img
                        class="w-60 h-50"
                        src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                        alt="album cover"
                    /></a>
                  </div>
                  <div>
                    <a
                      href="#"
                      class="font-semibold block hover:text-white mt-2"
                      >Are R&B Be</a
                    >
                    <div class="text-gray-500 mt-2">
                      Amazing Are R&B Be updated every day.
                    </div>
                    <div
                      class="uppercase tracking-widest text-xs text-gray-500 mt-2"
                    >
                      1083 Followers
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="bg-gray-700-spotify flex-none h-22 px-5 flex items-center justify-between"
    >
      <div class="flex items-center">
        <a href="#"
          ><img
            src="https://images.unsplash.com/photo-1471029093449-ca61fffdc2af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            alt="album cover"
            class="w-14 h-14"
        /></a>
        <div class="ml-3">
          <div class="flex items-center justify-start">
            <a href="#" class="hover:underline pr-3"
              >Sorry Would Go A Long Way</a
            >
            <svg
              class="hover:text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width="20"
              height="20"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </div>
          <div>
            <a
              href="#"
              class="text-xs text-gray-500 hover:underline hover:text-white"
              >Tori Kelly</a
            >
          </div>
        </div>
      </div>
      <div class="player-controls flex flex-col justify-center">
        <div class="flex justify-center">
          <button>
            <svg
              class="hover:text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width="24"
              height="24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          </button>
          <button class="ml-8">
            <svg
              class="hover:text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width="24"
              height="24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z"
              />
            </svg>
          </button>
          <button class="ml-8">
            <svg
              class="hover:text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width="30"
              height="30"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
          <button class="ml-8">
            <svg
              class="hover:text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width="24"
              height="24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z"
              />
            </svg>
          </button>
          <button class="ml-8">
            <svg
              class="hover:text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width="24"
              height="24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
          </button>
        </div>
        <div class="max-w-full mt-3 flex items-center justify-center">
          <div class="text-xs text-gray-500">1:20</div>
          <div class="bg-gray-500 rounded-lg w-full xl:w-200 h-1 ml-3"></div>
          <div class="ml-3 text-xs text-gray-500">3:20</div>
        </div>
      </div>
      <div class="volume-controls flex items-center">
        <button>
          <svg
            class="hover:text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width="20"
            height="20"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"
            />
          </svg>
        </button>
        <button class="ml-4">
          <svg
            class="hover:text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width="20"
            height="20"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
            />
          </svg>
        </button>
        <button class="ml-4">
          <svg
            class="hover:text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width="20"
            height="20"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
            />
          </svg>
        </button>
        <div class="bg-gray-500 rounded-lg w-20 h-1 ml-3"></div>
        <button class="ml-4">
          <svg
            class="hover:text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width="20"
            height="20"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import "./css/tailwind.css";
export default {
  name: "App",
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.sidebar-middle::-webkit-scrollbar {
  width: 8px;
  background-color: #121212;
}

.sidebar-middle::-webkit-scrollbar-thumb {
  width: 8px;
  background-color: #535353;
  border-radius: 8px;
}

.content-area::-webkit-scrollbar {
  width: 8px;
  background-color: #181818;
}

.content-area::-webkit-scrollbar-thumb {
  width: 8px;
  background-color: #535353;
  border-radius: 8px;
}
</style>
