import { useState } from "react";
import "./App.css";

function App() {
  const [array, setArray] = useState([0]);

  return (
    <>
      <header>
        <svg
          width="79"
          height="90"
          viewBox="0 0 79 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M75.9375 53.4375C75.9375 73.6348 59.5723 90 39.375 90C19.1777 90 2.8125 73.6348 2.8125 53.4375C2.8125 35.1562 16.2246 20.0039 33.75 17.3145V11.25H28.8281C27.668 11.25 26.7188 10.3008 26.7188 9.14062V2.10938C26.7188 0.949219 27.668 0 28.8281 0H49.9219C51.082 0 52.0312 0.949219 52.0312 2.10938V9.14062C52.0312 10.3008 51.082 11.25 49.9219 11.25H45V17.3145C51.5918 18.334 57.6035 21.1113 62.5254 25.1543L67.3594 20.3203C68.1855 19.4941 69.5215 19.4941 70.3477 20.3203L75.3223 25.2949C76.1484 26.1211 76.1484 27.457 75.3223 28.2832L70.1543 33.4512L70.0488 33.5566C73.7754 39.252 75.9375 46.0898 75.9375 53.4375ZM45 59.7656V33.1348C45 31.9746 44.0508 31.0254 42.8906 31.0254H35.8594C34.6992 31.0254 33.75 31.9746 33.75 33.1348V59.7656C33.75 60.9258 34.6992 61.875 35.8594 61.875H42.8906C44.0508 61.875 45 60.9258 45 59.7656Z"
            fill="#5C48D3"
          />
        </svg>
        <h1>React Counter V2</h1>
      </header>

      <button
        className="addCounter"
        onClick={() => {
          if (array.length < 3) {
            const copy = [...array];
            copy.push(0);
            setArray(copy);
          }
        }}
      >
        Add counter
      </button>
      <main>
        {array.map((element, index) => {
          return (
            <section key={index}>
              <div>
                <button
                  onClick={() => {
                    if (array[index] > 0) {
                      const copy = [...array];
                      copy[index] = element - 1;
                      setArray(copy);
                    }
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
                <p>{element}</p>
                <button
                  onClick={() => {
                    if (array[index] < 10) {
                      const copy = [...array];
                      copy[index] = element + 1;
                      setArray(copy);
                    }
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
              </div>
              <button
                className="reset"
                onClick={() => {
                  const copy = [...array];
                  copy[index] = 0;
                  setArray(copy);
                }}
              >
                Reset
              </button>
            </section>
          );
        })}
      </main>
      <footer>
        <div>
          Made with <span>React</span> at <span>Le Reacteur</span> by{" "}
          <span>Hyzeuline</span>
        </div>
      </footer>
    </>
  );
}

export default App;
