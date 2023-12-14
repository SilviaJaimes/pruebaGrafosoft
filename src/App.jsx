import Navbar from "./components/Navbar";
import { BellIcon } from '@heroicons/react/24/solid';
import "./css/style.css";

function App() {
  return (
    <>
      <div className="flex">
        <div className="w-2/3">

        </div>
        <div className="w-1/3">
          <div className="flex">
            <div className="w-3/5">

            </div>

            <div className="w-2/5">
              <div className="btn" id="button-bell">
                <BellIcon className="h-5 w-5 text" id="icon-bell" />
              </div>

              <div className="btn" id="button-mess">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5" id="icon-mess">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>

              <h2 style={{ position: 'fixed', top: 20, right: 80, fontSize: '15px' }}>Andrés Vargas</h2>

              <div className="foto" style={{ position: 'fixed', top: 10, right: 10 }}>
                <div className="avatar avatar-lg avatar-square">
                  <img src="https://i.pravatar.cc/150?u=a042581f4e29026024d" alt="avatar" />
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </>
  );
}

export default App;
