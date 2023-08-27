import Spinner from '@/components/Spinner'
import useDocumentTitle from '@/hooks/useDocumentTitle'
import useProductList from '@/hooks/useProductList'
import { getPbImageURL, numberWithComma } from '@/utils'
import { Link } from 'react-router-dom'

function Products() {
  useDocumentTitle('제품 목록')
  const { isLoading, data } = useProductList()

  if (isLoading) {
    return <Spinner size={160} />
  }
  if (data) {
    return (
      <>
        <section className="h-screen p-5 my-28">
          <h1 className="text-indigo-950 text-2xl mb-5">Products</h1>
          <ul className="grid grid-cols-3">
            {data.items.map((item) => (
              <li key={item.id} className="justify-self-center">
                <Link to={`/product/edit/${item.id}`}>
                  <figure>
                    <img className="h-[160px] object-cover mx-auto" src={getPbImageURL(item, 'photo')} alt="" />
                    <figcaption className="flex flex-col gap-1 items-center mt-2">
                      <span>
                        {item.title}({item.color})
                      </span>
                      <span className="font-semibold">{numberWithComma(item.price)}</span>
                    </figcaption>
                  </figure>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </>
    )
  }
}

export default Products
