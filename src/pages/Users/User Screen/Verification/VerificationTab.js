import React from "react";
import profilePic from "../../../../assets/images/avatar.png";

const VerificationTab = () => {
  return (
    <div className="d-flex gap-6">
      <div className="col-5">
        <div className="d-flex d-justify-space-between d-align-center ">
          <p className="font-14 f-600">SUBMITTED PROFILE</p>

          <div className="verificationStatusPending gap-2 font-14 f-600 d-flex d-align-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M8 12.6667C8.55227 12.6667 9 13.1144 9 13.6667C9 14.219 8.55227 14.6667 8 14.6667C7.44773 14.6667 7 14.219 7 13.6667C7 13.1144 7.44773 12.6667 8 12.6667ZM8 1.33337C10.2091 1.33337 12 3.12423 12 5.33337C12 6.77644 11.4983 7.52717 10.2173 8.61544C8.9324 9.70697 8.66667 10.198 8.66667 11.3334H7.33333C7.33333 9.68404 7.858 8.87017 9.354 7.59931C10.3653 6.74017 10.6667 6.2892 10.6667 5.33337C10.6667 3.86061 9.47273 2.66671 8 2.66671C6.52724 2.66671 5.33333 3.86061 5.33333 5.33337V6.00004H4V5.33337C4 3.12423 5.79086 1.33337 8 1.33337Z"
                fill="white"
              />
            </svg>
            Verification requested
          </div>
        </div>

        <div className=" mt-4 verificationProgress col-12 d-flex d-justify-space-between">
          <div className="d-flex gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M8.33457 12.6424L15.9949 4.98206L17.1734 6.16056L8.33457 14.9994L3.03125 9.69612L4.20976 8.51762L8.33457 12.6424Z"
                fill="#296EC7"
              />
            </svg>
            <p className="font-14 f-500">Parameters completed</p>
          </div>

          <p className="text-blue font-20 f-700">4/4</p>
        </div>
        <div className="d-flex d-flex-column mt-5">
          <p className="text-grey font-14">Profile picture</p>
          <div className="d-flex d-justify-space-between d-align-center">
            <img className="col-2 mt-3" src={profilePic} alt="profilePicture" />
            <div className="tickMark">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M6.66648 10.114L12.7947 3.98572L13.7375 4.92852L6.66648 11.9996L2.42383 7.75697L3.36663 6.81417L6.66648 10.114Z"
                  fill="#296EC7"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="d-flex d-flex-column mt-5">
          <p className="text-grey font-14">Username</p>
          <div className="d-flex d-justify-space-between d-align-center">
            <p>@whitegoose497</p>
            <div className="tickMark">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M6.66648 10.114L12.7947 3.98572L13.7375 4.92852L6.66648 11.9996L2.42383 7.75697L3.36663 6.81417L6.66648 10.114Z"
                  fill="#296EC7"
                />
              </svg>
            </div>
          </div>

          <div className="d-flex d-flex-column mt-4">
            <p className="text-grey font-14">Connected social media accounts</p>
            <div className="d-flex d-justify-space-between mt-2">
              <div className="d-flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M18.3327 9.99996C18.3327 5.41663 14.5827 1.66663 9.99935 1.66663C5.41602 1.66663 1.66602 5.41663 1.66602 9.99996C1.66602 14.1666 4.68685 17.6041 8.64518 18.2291V12.3958H6.56185V9.99996H8.64518V8.12496C8.64518 6.04163 9.89518 4.89579 11.7702 4.89579C12.7077 4.89579 13.6452 5.10413 13.6452 5.10413V7.18746H12.6035C11.5618 7.18746 11.2493 7.81246 11.2493 8.43746V9.99996H13.541L13.1243 12.3958H11.1452V18.3333C15.3118 17.7083 18.3327 14.1666 18.3327 9.99996Z"
                    fill="#76716F"
                  />
                </svg>
                <p className="font-14 f-600">facebook.com/josephjakeob879</p>
              </div>

              <div className="d-flex gap-4 d-align-center">
                <div className="tickMark">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M6.66648 10.114L12.7947 3.98572L13.7375 4.92852L6.66648 11.9996L2.42383 7.75697L3.36663 6.81417L6.66648 10.114Z"
                      fill="#296EC7"
                    />
                  </svg>
                </div>

                <button className="openLink text-grey d-flex d-align-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M10.6688 6.27614L4.93109 12.0139L3.98828 11.0711L9.72601 5.33333H4.66883V4H12.0021V11.3333H10.6688V6.27614Z"
                      fill="#76716F"
                    />
                  </svg>{" "}
                  Open link
                </button>
              </div>
            </div>

            <div className="d-flex d-justify-space-between mt-2">
              <div className="d-flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M9.99711 7.221C8.46694 7.221 7.2182 8.46976 7.2182 9.99996C7.2182 11.5302 8.46694 12.7789 9.99711 12.7789C11.5273 12.7789 12.776 11.5302 12.776 9.99996C12.776 8.46976 11.5273 7.221 9.99711 7.221ZM18.3318 9.99996C18.3318 8.84918 18.3422 7.70883 18.2775 6.56013C18.2129 5.2259 17.9086 4.04177 16.9329 3.06611C15.9552 2.08836 14.7732 1.78608 13.439 1.72145C12.2882 1.65682 11.1479 1.66725 9.99919 1.66725C8.84844 1.66725 7.70811 1.65682 6.55943 1.72145C5.22522 1.78608 4.04111 2.09045 3.06547 3.06611C2.08775 4.04385 1.78546 5.2259 1.72084 6.56013C1.65621 7.71091 1.66664 8.85127 1.66664 9.99996C1.66664 11.1487 1.65621 12.2911 1.72084 13.4398C1.78546 14.774 2.08983 15.9581 3.06547 16.9338C4.0432 17.9116 5.22522 18.2138 6.55943 18.2785C7.71019 18.3431 8.85052 18.3327 9.99919 18.3327C11.1499 18.3327 12.2903 18.3431 13.439 18.2785C14.7732 18.2138 15.9573 17.9095 16.9329 16.9338C17.9106 15.9561 18.2129 14.774 18.2775 13.4398C18.3443 12.2911 18.3318 11.1507 18.3318 9.99996ZM9.99711 14.2758C7.63097 14.2758 5.72138 12.3661 5.72138 9.99996C5.72138 7.63378 7.63097 5.72415 9.99711 5.72415C12.3632 5.72415 14.2728 7.63378 14.2728 9.99996C14.2728 12.3661 12.3632 14.2758 9.99711 14.2758ZM14.448 6.54763C13.8955 6.54763 13.4494 6.10149 13.4494 5.54904C13.4494 4.99658 13.8955 4.55044 14.448 4.55044C15.0004 4.55044 15.4465 4.99658 15.4465 5.54904C15.4467 5.68022 15.421 5.81014 15.3708 5.93137C15.3207 6.0526 15.2472 6.16275 15.1544 6.25551C15.0617 6.34827 14.9515 6.42182 14.8303 6.47195C14.7091 6.52207 14.5791 6.54779 14.448 6.54763Z"
                    fill="#76716F"
                  />
                </svg>
                <p className="font-14 f-600">instagram.com/josephjakeob879</p>
              </div>

              <div className="d-flex gap-4 d-align-center">
                <div className="tickMark">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M6.66648 10.114L12.7947 3.98572L13.7375 4.92852L6.66648 11.9996L2.42383 7.75697L3.36663 6.81417L6.66648 10.114Z"
                      fill="#296EC7"
                    />
                  </svg>
                </div>

                <button className="openLink text-grey d-flex d-align-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M10.6688 6.27614L4.93109 12.0139L3.98828 11.0711L9.72601 5.33333H4.66883V4H12.0021V11.3333H10.6688V6.27614Z"
                      fill="#76716F"
                    />
                  </svg>{" "}
                  Open link
                </button>
              </div>
            </div>

            <div className="d-flex d-justify-space-between mt-2">
              <div className="d-flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M18.3327 4.89587C17.7077 5.20837 17.0827 5.31254 16.3535 5.41671C17.0827 5.00004 17.6035 4.37504 17.8118 3.54171C17.1868 3.95837 16.4577 4.16671 15.6243 4.37504C14.9993 3.75004 14.0618 3.33337 13.1243 3.33337C10.9368 3.33337 9.27018 5.41671 9.79102 7.50004C6.97852 7.39587 4.47852 6.04171 2.70768 3.95837C1.77018 5.52087 2.29102 7.50004 3.74935 8.54171C3.22852 8.54171 2.70768 8.33337 2.18685 8.12504C2.18685 9.68754 3.33268 11.1459 4.89518 11.5625C4.37435 11.6667 3.85352 11.7709 3.33268 11.6667C3.74935 13.0209 4.99935 14.0625 6.56185 14.0625C5.31185 15 3.43685 15.5209 1.66602 15.3125C3.22852 16.25 4.99935 16.875 6.87435 16.875C13.2285 16.875 16.7702 11.5625 16.5618 6.66671C17.291 6.25004 17.916 5.62504 18.3327 4.89587Z"
                    fill="#76716F"
                  />
                </svg>
                <p className="font-14 f-600">twitter.com/whitegoose497</p>
              </div>

              <div className="d-flex gap-4 d-align-center">
                <div className="tickMark">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M6.66648 10.114L12.7947 3.98572L13.7375 4.92852L6.66648 11.9996L2.42383 7.75697L3.36663 6.81417L6.66648 10.114Z"
                      fill="#296EC7"
                    />
                  </svg>
                </div>

                <button className="openLink text-grey d-flex d-align-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M10.6688 6.27614L4.93109 12.0139L3.98828 11.0711L9.72601 5.33333H4.66883V4H12.0021V11.3333H10.6688V6.27614Z"
                      fill="#76716F"
                    />
                  </svg>{" "}
                  Open link
                </button>
              </div>
            </div>

            <div className="d-flex d-justify-space-between mt-2">
              <div className="d-flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M9.99935 18.3333C5.39685 18.3333 1.66602 14.6025 1.66602 9.99996C1.66602 5.39746 5.39685 1.66663 9.99935 1.66663C14.6018 1.66663 18.3327 5.39746 18.3327 9.99996C18.3327 14.6025 14.6018 18.3333 9.99935 18.3333ZM8.09102 16.3891C7.26886 14.6452 6.79258 12.7585 6.68852 10.8333H3.38435C3.5465 12.1157 4.07762 13.3234 4.91316 14.3097C5.74869 15.296 6.85269 16.0184 8.09102 16.3891ZM8.35768 10.8333C8.48352 12.8658 9.06435 14.775 9.99935 16.46C10.9596 14.7304 11.5206 12.8079 11.641 10.8333H8.35768ZM16.6143 10.8333H13.3102C13.2061 12.7585 12.7298 14.6452 11.9077 16.3891C13.146 16.0184 14.25 15.296 15.0855 14.3097C15.9211 13.3234 16.4522 12.1157 16.6143 10.8333ZM3.38435 9.16663H6.68852C6.79258 7.24145 7.26886 5.3547 8.09102 3.61079C6.85269 3.98153 5.74869 4.70392 4.91316 5.69021C4.07762 6.67649 3.5465 7.88421 3.38435 9.16663ZM8.35852 9.16663H11.6402C11.52 7.19212 10.9593 5.26957 9.99935 3.53996C9.03908 5.2695 8.47815 7.19206 8.35768 9.16663H8.35852ZM11.9077 3.61079C12.7298 5.3547 13.2061 7.24145 13.3102 9.16663H16.6143C16.4522 7.88421 15.9211 6.67649 15.0855 5.69021C14.25 4.70392 13.146 3.98153 11.9077 3.61079Z"
                    fill="#76716F"
                  />
                </svg>
                <p className="font-14 f-600">gooseiswhite.com</p>
              </div>

              <div className="d-flex gap-4 d-align-center">
                <div className="tickMark">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M6.66648 10.114L12.7947 3.98572L13.7375 4.92852L6.66648 11.9996L2.42383 7.75697L3.36663 6.81417L6.66648 10.114Z"
                      fill="#296EC7"
                    />
                  </svg>
                </div>

                <button className="openLink text-grey d-flex d-align-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M10.6688 6.27614L4.93109 12.0139L3.98828 11.0711L9.72601 5.33333H4.66883V4H12.0021V11.3333H10.6688V6.27614Z"
                      fill="#76716F"
                    />
                  </svg>{" "}
                  Open link
                </button>
              </div>
            </div>
          </div>

          <div className="d-flex d-flex-column mt-4">
            <p>Email address</p>
            <div className="d-flex d-justify-space-between d-align-center">
              <p className="f-500">gooseiswhite123@gmail.com</p>
              <div className="tickMark">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M6.66648 10.114L12.7947 3.98572L13.7375 4.92852L6.66648 11.9996L2.42383 7.75697L3.36663 6.81417L6.66648 10.114Z"
                    fill="#296EC7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-6">
        <div className="completeVerificationPrompt d-flex d-flex-column col-12">
          <p className="font-18 f-700">Complete verification for user?</p>
          <p className="text-grey f-500 font-14">
            This will grant user the verified badge and make their profile more
            public. This also allows user to post verified collections.
          </p>

          <div className="d-flex d-align-center mt-2 gap-4">
            <button className="decline font-14">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
              >
                <path
                  d="M10.5006 8.82208L14.6253 4.69727L15.8038 5.87577L11.6791 10.0006L15.8038 14.1253L14.6253 15.3038L10.5006 11.1791L6.37577 15.3038L5.19727 14.1253L9.32208 10.0006L5.19727 5.87577L6.37577 4.69727L10.5006 8.82208Z"
                  fill="#76716F"
                />
              </svg>
              Decline
            </button>

            <button className="approve font-14">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
              >
                <path
                  d="M8.83457 12.6424L16.4949 4.98206L17.6734 6.16056L8.83457 14.9994L3.53125 9.69612L4.70976 8.51762L8.83457 12.6424Z"
                  fill="white"
                />
              </svg>
              Approve
            </button>
          </div>
        </div>

        <div className="d-flex d-flex-column mt-5">
          <p className="f-600 font-14">VERIFICATION HISTORY</p>

          <div className="mt-2">
            <p className="mt-2 font-14 text-grey f-600">Thu, 12:20</p>
            <p className="f-600">Verification in progress</p>
          </div>

          <div className="mt-1">
            <p className="mt-2 font-14 text-grey f-600">Thu, 12:20</p>
            <p className="f-600">Verification rejected</p>
            <p className="text-grey font-14">
              Rejected for - Broken social media link
            </p>
          </div>

          <div className="mt-1">
            <p className="mt-2 font-14 text-grey f-600">Thu, 12:20</p>
            <p className="f-600">Verification rejected</p>
            <p className="text-grey font-14">
              Rejected for - Broken social media link
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerificationTab;
