import { useState } from 'react'

const Pagination = (props) => {
  const productsPerPage = props.productsPerPage
  const totalProducts = props.totalProducts

  const total_pages = Math.ceil(totalProducts / productsPerPage)

  const [page, setPage] = useState(1)

  const prevHandler = () => {
    if (page === 1) return
    setPage((page) => page - 1)
    props.onChange(page - 1)
  }
  const nextHandler = () => {
    if (page === total_pages) return

    setPage((page) => page + 1)
    props.onChange(page + 1)
  }
  return (
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li class="page-item" onClick={page <= 1 ? null : prevHandler}>
          <a class={`page-link ${page <= 1 && 'disabled'}`} href="#">
            Previous
          </a>
        </li>
        {Array.from({ length: total_pages }, (_, index) => index + 1).map(
          (each) => (
            <li
              class="page-item"
              key={each}
              onClick={() => {
                props.onChange(each)
                setPage((page) => each)
              }}
            >
              <a class="page-link" href="#">
                {each}
              </a>
            </li>
          ),
        )}
        <li
          class="page-item"
          onClick={page >= total_pages ? null : nextHandler}
        >
          <a class={`page-link ${page > total_pages && 'disabled'}`} href="#">
            Next
          </a>
        </li>
      </ul>
    </nav>
  )
  // return (
  //   <div className="pagination__card">
  //     <div className="pagination__icons--box">
  //       <i
  //         onClick={prevHandler}
  //         className={`icofont-arrow-left pagination__icons--prev ${
  //           page === 1 ? ' not__allowed' : ''
  //         }`}
  //       ></i>

  //       <p className="pagination__icons--paragraph">{page}</p>
  //       <i
  //         onClick={nextHandler}
  //         className={` icofont-arrow-right pagination__icons--next ${
  //           page === total_pages || total_pages < 1 ? ' not__allowed' : ''
  //         }`}
  //       ></i>
  //     </div>
  //     <div className="pagination__buttons">
  //       {Array.from({ length: total_pages }, (_, index) => index + 1).map(
  //         (each) => (
  //           <button
  //             key={each}
  //             onClick={() => {
  //               props.onChange(each)
  //               setPage((page) => each)
  //             }}
  //           >
  //             {each}
  //           </button>
  //         ),
  //       )}
  //     </div>
  //   </div>
  // )
}
export default Pagination
