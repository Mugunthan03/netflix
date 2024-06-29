import ReactDom from 'react-dom/client'
import App from './App'
import store from './redux/store'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDom.createRoot(document.getElementById('root'))
root.render(
<Provider store={store}>
    <App />
    <ToastContainer />
</Provider>
)