/* eslint-disable prettier/prettier */
/* eslint-disable node/no-missing-import */
import { Header } from "./components/header";

export const App = () => {
  return (
    <>
      <Header />
      <div className="w-full h-screen bg-bg-base-img flex items-center justify-center">
        <div className="w-96 bg-white shadow-lg rounded border-2">
          <div className="w-full">
            <div className="font-bold p-2">Get Test Tokens</div>
            <div className="text-xs font-light p-2">
              このFaucetは、Stdoneサービスのテストネット版で利用する通貨を一時的に送信します。
              それ以外での利用は、構いませんが複数アドレスでのリクエストは常識の範囲内でご利用ください。
            </div>
            <div className="p-2">
              <ul
                className="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4"
                id="tabs-tab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <a
                    href="#tabs-rinkeby"
                    className="
      nav-link
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
      active
    "
                    id="tabs-rinkeby-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#tabs-rinkeby"
                    role="tab"
                    aria-controls="tabs-rinkeby"
                    aria-selected="true"
                  >
                    Rinkeby
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    href="#tabs-mumbai"
                    className="
      nav-link
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    "
                    id="tabs-mumbai-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#tabs-mumbai"
                    role="tab"
                    aria-controls="tabs-mumbai"
                    aria-selected="false"
                  >
                    MUMBAI
                  </a>
                </li>
              </ul>
              <div className="tab-content" id="tabs-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="tabs-rinkeby"
                  role="tabpanel"
                  aria-labelledby="tabs-rinkeby-tab"
                >
                  <div>
                    <table className="table-fixed break-words break-all">
                      <thead>
                        <tr>
                          <th className="px-4 py-2 text-xs">Symbol</th>
                          <th className="px-4 py-2 text-xs">Contract Address</th>
                        </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <td className="border px-4 py-2 whitespace-nowrap">WETH</td>
                              <td className="border px-4 py-2">x0xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</td>
                          </tr>
                          <tr>
                              <td className="border px-4 py-2 whitespace-nowrap">USDC</td>
                              <td className="border px-4 py-2">x0xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</td>
                          </tr>
                          <tr>
                              <td className="border px-4 py-2 whitespace-nowrap">JPYC</td>
                              <td className="border px-4 py-2">x0xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</td>
                          </tr>
                          <tr>
                              <td className="border px-4 py-2 whitespace-nowrap">DAI</td>
                              <td className="border px-4 py-2">x0xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</td>
                          </tr>
                      </tbody>
                    </table>
                    <div className="m-4">
                        <button className="w-full bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                            Submit
                        </button>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="tabs-mumbai"
                  role="tabpanel"
                  aria-labelledby="tabs-mumbai-tab"
                >
                  <div>
                    <table className="table-fixed break-words break-all">
                      <thead>
                        <tr>
                          <th className="px-4 py-2 text-xs">Symbol</th>
                          <th className="px-4 py-2 text-xs">Contract Address</th>
                        </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <td className="border px-4 py-2 whitespace-nowrap">WETH</td>
                              <td className="border px-4 py-2">0xB3B3cdD7D73E8699692d7f76F92E3632132ffC93</td>
                          </tr>
                          <tr>
                              <td className="border px-4 py-2 whitespace-nowrap">USDC</td>
                              <td className="border px-4 py-2">0x98D16468cEbd24370E9028Cef05d45d21b577d42</td>
                          </tr>
                          <tr>
                              <td className="border px-4 py-2 whitespace-nowrap">JPYC</td>
                              <td className="border px-4 py-2">0x65A22C33a664b8e5Bf8D13528E9ce445225c11FF</td>
                          </tr>
                          <tr>
                              <td className="border px-4 py-2 whitespace-nowrap">DAI</td>
                              <td className="border px-4 py-2">0x89AB110B1eCa0225F4Dfd19492D8c475fFf31585</td>
                          </tr>
                      </tbody>
                    </table>
                    <div className="m-4">
                        <button className="w-full bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                            Submit
                        </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
