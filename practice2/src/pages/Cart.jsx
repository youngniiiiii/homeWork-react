import SearchList from './SearchList'
import LearnStateAndEffects from './State_ArrayType'
import LearnStateAnd from './State_ObjectType'

function Cart({ headline }) {
  return (
    <section className="h-screen bg-indigo-100 p-5">
      <h2>{headline}</h2>
      <LearnStateAndEffects />
      <LearnStateAnd />
      <SearchList />
    </section>
  )
}
export default Cart
