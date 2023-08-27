import Spinner from '@/components/Spinner'
import useDocumentTitle from '@/hooks/useDocumentTitle'
import useProductList from '@/hooks/useProductList'
import { getPbImageURL, numberWithComma } from '@/utils'
import { Link } from 'react-router-dom'

// PB → READ / CREATE / UPDATE / DELETE
//
// HTTP Methods
// CREATE => POST
// READ => GET
// UPDATE => PUT OR PATCH
// DELETE => DELETE

// useState
// useEffect
// custom hook

function Products() {
  useDocumentTitle('제품 목록')
  const { isLoading, data } = useProductList()

  if (isLoading) {
    return <Spinner size={160} />
  }

  if (!data || !data.items) {
    // data 나 data.items 가 null 값이거나 undefined 인 경우, 에러를 반환합니다.
    // 또는, 대체할 컴포넌트나 UI 요소를 반환하는 것도 가능합니다.
    return <div>Loading failed. Please try again later.</div>
  }

  return (
    <div>
      <h1 className="text-indigo-950 text-2xl mb-5">Products</h1>
      <ul className="grid grid-cols-3">
        {data.items?.map((item) => (
          <li key={item.id} className="justify-self-center">
            <Link to={`/product/edit/${item.id}`}>
              <figure>
                <img className="h-[160px] object-cover mx-auto" src={getPbImageURL(item, 'photo')} alt="" />
                <figcaption className="flex flex-col gap-1 items-center mt-2">
                  <span>{item.title}</span>
                  <span className="font-semibold">{numberWithComma(item.price)}</span>
                </figcaption>
              </figure>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Products
