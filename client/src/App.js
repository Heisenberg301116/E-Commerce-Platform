// Importing components
import Header from './components/header/header'
import Home from './components/home/home'
import DetailView from './components/detailed_item/Detailview'
import ReviewsPage from './components/detailed_item/RightView/Reviews/Reviews_Page'
import QAPage from './components/detailed_item/RightView/Question_Answers/QA_Page'
import CartPage from './components/header/Cart/Cart_Page'
import MyOrdersPage from './components/header/My_Orders/Orders_Page'
import WriteReview from './components/header/My_Orders/Write_Review'
import CategoryProducts from './components/home/products_list'
import Alert from './components/alert'
import { Success } from './components/Payment_Status'
import { Failure } from './components/Payment_Status'
import DataProvider from './context/DataProvider'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import LoginPage from './components/header/Login/login_section'
// import SignupPage from './components/header/Login/signup_section'



function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Alert />
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={<DetailView />} />
          <Route path='category/:category' element={<CategoryProducts />} />
          <Route path='tagline/:tag' element={<CategoryProducts />} />
          <Route path='search/:query' element={<CategoryProducts />} />
          <Route path='/product/:id/reviews/:page' element={<ReviewsPage />} />
          <Route path='/product/:id/questions/:page' element={<QAPage />} />
          <Route path='/user/cart' element={<CartPage />} />
          <Route path='/user/my-orders' element={<MyOrdersPage />} />
          <Route path='/product/:id/write-review' element={<WriteReview />} />
          <Route path='/success' element={<Success />} />
          <Route path='/failed' element={<Failure />} />

          {/* <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} /> */}

        </Routes>

      </BrowserRouter>
    </DataProvider>

  );
}

export default App;