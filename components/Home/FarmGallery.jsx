import React from 'react'
import Gallery from 'react-photo-gallery-next'
import ItemJson from '../../public/items.json'
import PhotoModal from '../Modal/PhotoModal'
export default function FarmGallery() {
  const [show, setShow] = React.useState(false)
  const [src, setSrc] = React.useState('')
  return (
    <section className="gallery-section  bg-ash">
      <div className="container-fluid p-0 m-0">
        <div className="row">
          {/* <div className="col-12">
            <div className="section-header">
              <h2>Farm Gallery</h2>
            </div>
          </div> */}
          <div className="col-12">
            <Gallery
              photos={ItemJson.photos}
              onClick={(e) => {
                console.log('src', e.target.src)
                setShow(true)
                setSrc(e.target.src)
              }}
            />
          </div>
        </div>
      </div>
      {/* modal */}
      {show && <PhotoModal show={show} setShow={setShow} src={src} />}
    </section>
  )
}
