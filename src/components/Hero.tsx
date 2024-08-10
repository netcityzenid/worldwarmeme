import React from "react";
import pepe from "../../public/images/pepe.png";
import doge from "../../public/images/doge.png";

export default function Hero() {
  return (
    <div className="text-white relative z-50 px-5 mb-40">
      <div className="flex justify-center mt-10">
        <img src={pepe} alt="pepe" className="mt-0 h-40"></img>
        <img src={doge} alt="doge" className="mt-0 h-40"></img>
      </div>
      <div className="text-white text-center text-4xl font-semibold uppercase">World War Meme</div>
      <div className="text-center mt-5 text text-white/70">World War Meme is an innovative and entertaining memecoin project that blends the world of cryptocurrency with the captivating culture of internet memes.</div>
      <div id="button" className="flex mt-5 justify-center gap-2 text-black font-semibold ">
        <a href="" className="px-4 py-2 flex items-center justify-between w-max text-center bg-[#ff8c00] hover:bg-[#e57e00] rounded-xl">
          <span>Buy WWM</span>
          <span>
            <svg className="h-5 w-auto ml-5" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" stroke-width="6" stroke="#000000" fill="none">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M55.4,32V53.58a1.81,1.81,0,0,1-1.82,1.82H10.42A1.81,1.81,0,0,1,8.6,53.58V10.42A1.81,1.81,0,0,1,10.42,8.6H32"></path>
                <polyline points="40.32 8.6 55.4 8.6 55.4 24.18"></polyline>
                <line x1="19.32" y1="45.72" x2="54.61" y2="8.91"></line>
              </g>
            </svg>
          </span>
        </a>
        <a href="" className="px-4 py-2 flex items-center justify-between w-max text-center bg-[#ff8c00] hover:bg-[#e57e00]  rounded-xl">
          <span>Join Our Community</span>
          <span>
            <svg className="h-5 w-auto ml-5" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" stroke-width="6" stroke="#000000" fill="none">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M55.4,32V53.58a1.81,1.81,0,0,1-1.82,1.82H10.42A1.81,1.81,0,0,1,8.6,53.58V10.42A1.81,1.81,0,0,1,10.42,8.6H32"></path>
                <polyline points="40.32 8.6 55.4 8.6 55.4 24.18"></polyline>
                <line x1="19.32" y1="45.72" x2="54.61" y2="8.91"></line>
              </g>
            </svg>
          </span>
        </a>
      </div>
      <div className="text-2xl font-medium mt-20 text-center ">Why World War Meme?</div>
      <div className="text-left mt-4  text-white/50">
        <ul className=" list-none">
          <li className="mb-5 p-4 rounded-xl bg-gradient-to-tr from-[#ffffff02] to-[#ffffff00] backdrop-blur-md border border-white/10">
            <div>
              <svg className="h-10 w-auto mb-2 " viewBox="2 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.15407 7.30116C7.52877 5.59304 9.63674 4.5 12 4.5C12.365 4.5 12.7238 4.52607 13.0748 4.57644L13.7126 5.85192L11.2716 8.2929L8.6466 8.6679L7.36009 9.95441L6.15407 7.30116ZM5.2011 8.82954C4.75126 9.79256 4.5 10.8669 4.5 12C4.5 15.6945 7.17133 18.7651 10.6878 19.3856L11.0989 18.7195L8.8147 15.547L10.3741 13.5256L9.63268 13.1549L6.94027 13.6036L6.41366 11.4972L5.2011 8.82954ZM7.95559 11.4802L8.05962 11.8964L9.86722 11.5951L11.3726 12.3478L14.0824 11.9714L18.9544 14.8135C19.3063 13.9447 19.5 12.995 19.5 12C19.5 8.93729 17.6642 6.30336 15.033 5.13856L15.5377 6.1481L11.9787 9.70711L9.35371 10.0821L7.95559 11.4802ZM18.2539 16.1414C16.9774 18.0652 14.8369 19.366 12.3859 19.4902L12.9011 18.6555L10.6853 15.578L12.0853 13.7632L13.7748 13.5286L18.2539 16.1414ZM12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3Z"
                    fill="#ff8c00"
                  ></path>{" "}
                </g>
              </svg>
            </div>
            <span className="text-white ">Meme Domination:</span> World War Meme is all about conquering the meme world. Collect, share, and trade the dankest memes as you rise to become the ultimate meme lord.
          </li>
          <li className="mb-5 p-4 rounded-xl bg-gradient-to-tr from-[#ffffff02] to-[#ffffff07] backdrop-blur-md border border border-white/10">
            <div>
              <svg className="h-10 w-auto mb-2 p-0.5" viewBox="1 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7"
                    stroke="#ff8c00"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  ></path>{" "}
                  <path
                    d="M14.8284 19.0711C14.457 19.9997 14.016 20.7362 13.5307 21.2388C13.0454 21.7413 12.5253 22 12 22C11.4747 22 10.9546 21.7413 10.4693 21.2388C9.98396 20.7362 9.54301 19.9997 9.17157 19.0711C8.80014 18.1425 8.5055 17.0401 8.30448 15.8268C8.10346 14.6136 8 13.3132 8 12C8 10.6868 8.10346 9.38642 8.30448 8.17317C8.5055 6.95991 8.80014 5.85752 9.17157 4.92893C9.54301 4.00035 9.98396 3.26375 10.4693 2.76121C10.9546 2.25866 11.4747 2 12 2C12.5253 2 13.0454 2.25866 13.5307 2.7612C14.016 3.26375 14.457 4.00035 14.8284 4.92893C15.1999 5.85752 15.4945 6.95991 15.6955 8.17317C15.8965 9.38642 16 10.6868 16 12C16 13.3132 15.8965 14.6136 15.6955 15.8268"
                    stroke="#ff8c00"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  ></path>{" "}
                  <path d="M2 12H10M22 12H14" stroke="#ff8c00" stroke-width="1.5" stroke-linecap="round"></path>{" "}
                </g>
              </svg>
            </div>
            <span className="text-white">Hilarious Community:</span> Join a hilarious and vibrant community of meme enthusiasts. Share your favorite memes, participate in meme battles, and laugh your way to meme stardom.
          </li>
          <li className="mb-5 p-4 rounded-xl bg-gradient-to-tr from-[#ffffff02] to-[#ffffff07] backdrop-blur-md border border border-white/10">
            <div>
              <svg className="h-10 w-auto mb-2" viewBox="1 1 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M12 22.9199C17.5228 22.9199 22 18.4428 22 12.9199C22 7.39707 17.5228 2.91992 12 2.91992C6.47715 2.91992 2 7.39707 2 12.9199C2 18.4428 6.47715 22.9199 12 22.9199Z"
                    stroke="#ff8c00"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                  <path
                    d="M12.7002 17.1099V18.21C12.7002 18.3877 12.6296 18.5582 12.504 18.6838C12.3783 18.8095 12.2079 18.8799 12.0302 18.8799C11.8525 18.8799 11.6821 18.8095 11.5565 18.6838C11.4308 18.5582 11.3602 18.3877 11.3602 18.21V17.0801C10.9165 17.0072 10.4917 16.8468 10.1106 16.6082C9.72943 16.3695 9.39958 16.0573 9.14023 15.6899C9.04577 15.57 8.99311 15.4226 8.99023 15.27C8.99014 15.1834 9.00762 15.0975 9.04164 15.0178C9.07566 14.9382 9.12551 14.8662 9.18816 14.8064C9.2508 14.7466 9.32494 14.7 9.40608 14.6697C9.48723 14.6393 9.5737 14.6258 9.66023 14.6299C9.74611 14.6294 9.83102 14.648 9.90884 14.6843C9.98667 14.7206 10.0554 14.774 10.1102 14.8401C10.4301 15.258 10.8643 15.574 11.3602 15.75V13.21C10.0302 12.69 9.36023 11.9099 9.36023 10.8999C9.38027 10.3592 9.59279 9.84343 9.95949 9.44556C10.3262 9.04769 10.8229 8.79397 11.3602 8.72998V7.62988C11.3602 7.45219 11.4308 7.2819 11.5565 7.15625C11.6821 7.0306 11.8525 6.95996 12.0302 6.95996C12.2079 6.95996 12.3783 7.0306 12.504 7.15625C12.6296 7.2819 12.7002 7.45219 12.7002 7.62988V8.71997C13.0723 8.77828 13.4289 8.91103 13.7485 9.11035C14.0681 9.30967 14.3442 9.57137 14.5602 9.87988C14.6555 9.99235 14.7117 10.1329 14.7202 10.28C14.7229 10.3657 14.7083 10.451 14.6774 10.531C14.6464 10.611 14.5997 10.684 14.54 10.7456C14.4803 10.8072 14.4088 10.856 14.3298 10.8894C14.2509 10.9228 14.166 10.94 14.0802 10.9399C13.9906 10.9394 13.9022 10.9196 13.8211 10.8816C13.74 10.8436 13.668 10.7884 13.6102 10.72C13.3718 10.4221 13.0574 10.1942 12.7002 10.0601V12.3101L12.9502 12.4099C14.2202 12.9099 15.0102 13.63 15.0102 14.77C14.9954 15.3808 14.7481 15.9629 14.3189 16.3977C13.8897 16.8325 13.3108 17.0871 12.7002 17.1099ZM11.3602 11.73V10.0999C11.1988 10.1584 11.0599 10.2662 10.963 10.408C10.8662 10.5497 10.8162 10.7183 10.8202 10.8899C10.8185 11.0673 10.8688 11.2414 10.9647 11.3906C11.0607 11.5399 11.1981 11.6579 11.3602 11.73ZM13.5502 14.8C13.5502 14.32 13.2202 14.03 12.7002 13.8V15.8C12.9387 15.7639 13.156 15.6427 13.3122 15.459C13.4684 15.2752 13.553 15.0412 13.5502 14.8Z"
                    fill="#ff8c00"
                  ></path>{" "}
                </g>
              </svg>
            </div>
            <span className="text-white">Epic Rewards:</span> We reward you for doing what you love – creating and sharing memes! Earn World War Meme tokens for participating in meme contests, challenges, and spreading the meme gospel.
          </li>
          <li className="mb-5 p-4 rounded-xl bg-gradient-to-tr from-[#ffffff02] to-[#ffffff07] backdrop-blur-md border border border-white/10">
            <div>
              <svg className="h-10 w-auto mb-2" viewBox="1 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path d="M9.57002 12.46L6.52002 15.51" stroke="#ff8c00" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>{" "}
                  <path d="M6.55005 12.49L9.60005 15.54" stroke="#ff8c00" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>{" "}
                  <path d="M13.53 14H13.54" stroke="#ff8c00" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>{" "}
                  <path d="M17.47 14H17.48" stroke="#ff8c00" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>{" "}
                  <path d="M15.5 15.98V15.96" stroke="#ff8c00" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>{" "}
                  <path d="M15.5 12.04V12.02" stroke="#ff8c00" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>{" "}
                  <path d="M9 22H15C20 22 22 20 22 15V13C22 8 20 6 15 6H9C4 6 2 8 2 13V15C2 20 4 22 9 22Z" stroke="#ff8c00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>{" "}
                  <path d="M13.01 2L13 3.01C12.99 3.56 12.55 4 12 4H11.97C11.42 4 10.98 4.45 10.98 5C10.98 5.55 11.43 6 11.98 6H12.98" stroke="#ff8c00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>{" "}
                </g>
              </svg>
            </div>
            <span className="text-white">Future Fun:</span> Stay tuned for meme-tastic events, collaborations with popular meme creators, and maybe even some meme-themed NFTs. The possibilities are as endless as the meme potential.
          </li>
        </ul>
      </div>
      <div className="text-center mt-20 font-semibold text-4xl">Tokenomics</div>
      <div className="text-center mt-20 font-semibold text-4xl">Roadmap</div>
    </div>
  );
}
