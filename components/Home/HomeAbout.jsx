import Image from 'next/image'

export default function HomeAbout() {
  return (
    <section className="about-section relative padding-tb bg-ash">
      <div className="container">
        <div className="row mb-15">
          <div className="col-xl-7 col-12">
            <div className="about-left-part">
              <div className="about-item">
                <div className="about-inner">
                  <div className="about-thumb">
                    <Image
                      width={100}
                      height={100}
                      src="/assets/images/new/crate_egg.jpeg"
                      alt="about"
                    />
                  </div>
                  <div className="about-thumb">
                    <div className="ac-thumb">
                      <Image
                        width={100}
                        height={100}
                        className=""
                        src="/assets/images/new/chicken2.jpeg"
                        alt="about Image"
                      />
                    </div>
                  </div>
                  <div className="about-thumb">
                    <div className="ac-thumb">
                      <Image
                        width={100}
                        height={100}
                        className=""
                        src="/assets/images/new/tilapia.jpeg"
                        alt="about Image"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="about-item">
                <div className="about-inner">
                  <div className="about-thumb">
                    <Image
                      width={100}
                      height={100}
                      src="/assets/images/about/06.jpg"
                      alt="about"
                    />
                  </div>
                  <div className="about-thumb">
                    <div className="ac-thumb">
                      <Image
                        width={100}
                        height={100}
                        className=""
                        src="https://images.unsplash.com/photo-1553531009-c4605f302b47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHBvdWx0cnl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                        alt="about Image"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="about-item">
                <div className="about-inner">
                  <div className="about-thumb">
                    <Image
                      width={100}
                      height={100}
                      src="https://images.unsplash.com/photo-1630090374791-c9eb7bab3935?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80"
                      alt="about"
                    />
                  </div>
                  <div className="about-thumb">
                    <Image
                      width={100}
                      height={100}
                      src="/assets/images/new/Catfish.jpeg"
                      alt="about"
                    />
                  </div>
                  <div className="about-thumb">
                    <Image
                      width={100}
                      height={100}
                      src="/assets/images/new/photo3.jpeg"
                      alt="about"
                    />
                  </div>
                  {/* <div className="about-thumb">
                    <div className="ac-thumb">
                      <Image
                        width={100}
                        height={100}
                        className=""
                        src="https://images.unsplash.com/photo-1569466593977-94ee7ed02ec9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBvdWx0cnl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                        alt="about Image"
                      />
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-12">
            <div className="about-wrapper p-0">
              <div className="about-title">
                <h2>
                  <span className="d-lg-block">Welcome to Jobie</span>
                  <span className="d-lg-block"> Agro Farm</span>
                </h2>
              </div>
              <div className="about-content">
                <p>
                  Our vision and experience is designing and building
                  residential gated communities and investment opportunities. We
                  exhibits the most superior standards in terms of quality and
                  yet remains affordable to the masses. We specialise in
                  hatching of different types of fertilized eggs and breeding
                  and rearing layers and boilers. We supply day old chicks of
                  different breeds and commercial eggs within Abia state and
                  outside the state. At Jobie Agro farm we have over 5 thousand
                  yam plantation stands that will be heavest around November
                  sale at affordable price. We build local made battery cages
                  for layers for small farmers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
