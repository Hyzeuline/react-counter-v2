const Counter = props => {
  return (
    <main>
      <section>
        <div className="counterButton">
          {props.counter > 0 && (
            <button
              className="subButton"
              onClick={() => {
                props.setCounter(props.counter - 1);
              }}
            >
              <svg
                width="53"
                height="60"
                viewBox="0 0 53 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_43)">
                  <path
                    d="M48.75 24.375H3.75C1.6793 24.375 0 26.0543 0 28.125V31.875C0 33.9457 1.6793 35.625 3.75 35.625H48.75C50.8207 35.625 52.5 33.9457 52.5 31.875V28.125C52.5 26.0543 50.8207 24.375 48.75 24.375Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_43">
                    <rect width="52.5" height="60" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          )}
          <div className="result">
            <div>{props.counter}</div>
          </div>
          {props.counter < 10 && (
            <button
              className="addButton"
              onClick={() => {
                props.setCounter(props.counter + 1);
              }}
            >
              <svg
                width="53"
                height="60"
                viewBox="0 0 53 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_45)">
                  <path
                    d="M48.75 24.375H31.875V7.5C31.875 5.4293 30.1957 3.75 28.125 3.75H24.375C22.3043 3.75 20.625 5.4293 20.625 7.5V24.375H3.75C1.6793 24.375 0 26.0543 0 28.125V31.875C0 33.9457 1.6793 35.625 3.75 35.625H20.625V52.5C20.625 54.5707 22.3043 56.25 24.375 56.25H28.125C30.1957 56.25 31.875 54.5707 31.875 52.5V35.625H48.75C50.8207 35.625 52.5 33.9457 52.5 31.875V28.125C52.5 26.0543 50.8207 24.375 48.75 24.375Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_45">
                    <rect width="52.5" height="60" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          )}
        </div>
        <button
          className="reset"
          onClick={() => {
            props.setCounter(0);
          }}
        >
          Reset
        </button>
      </section>
    </main>
  );
};

export default Counter;
