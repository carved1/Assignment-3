import Header from './components/Header'
import Hero from './components/Hero'
import ProductCard from './components/ProductCard'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Header storeName="ComponentCorner" />
      <Hero
        title="Welcome to ComponentCorner"
        subtitle="Shop vinyl records for your collection."
        ctaText="Shop Now"
      />
      <main className="products" id="shop">
        <h2>Featured Products</h2>
        <div className="product-list">
          <ProductCard
            name="Kind of Blue"
            price="$34.99"
            image="https://placehold.co/600x400"
            description="Miles Davis album from 1959."
          />
          <ProductCard
            name="Abbey Road"
            price="$29.99"
            image="https://placehold.co/600x400"
            description="The Beatles album from 1969."
          />
          <ProductCard
            name="What's Going On"
            price="$32.99"
            image="https://placehold.co/600x400"
            description="Marvin Gaye album from 1971."
          />
        </div>
      </main>
      <Footer
        storeName="ComponentCorner"
        email="hello@componentcorner.com"
        phone="(555) 123-4567"
        address="123 Record Street, New York, NY"
      />
    </>
  )
}

export default App
