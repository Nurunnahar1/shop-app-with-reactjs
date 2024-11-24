import Bradcrumb from "../../components/Bradcrumb";

const Dashboard = () => {
  return (
    <>
      <Bradcrumb />

      <section>
        <div className="container">
          <div className="section-content">
            <div className="row">
              <div className="col-md-8 col-md-offset-2">
                <div className="title center">
                  <h3 className="fw-400 mb-50">Minimal </h3>
                </div>
                <ul role="tablist" className="admin-tools nav nav-tabs outline">
                  <li role="presentation" >
                    <a href="#">Product </a>
                  </li>
                  <li role="presentation"  >
                    <a href="#">Product </a>
                  </li>
                  <li role="presentation" >
                    <a href="#">Product </a>
                  </li>
                  <li role="presentation"  >
                    <a href="#">Product </a>
                  </li>
                  <li role="presentation" >
                    <a href="#">Product </a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div
                    id="first-tab-2"
                    role="tabpanel"
                    className="tab-pane active"
                  >
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Illo facilis ab impedit ipsam inventore, odio sit
                      repudiandae. Fuga soluta officia quas voluptatem, dolores
                      nulla eaque nostrum nobis culpa illum rerum. Ut molestias
                      nemo voluptas velit explicabo dolores iusto labore eius,
                      quidem voluptates praesentium, libero minus cumque aut
                      consequatur expedita excepturi quae voluptatum.
                    </p>
                  </div>
                  <div id="second-tab-2" role="tabpanel" className="tab-pane">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quo vel qui cumque laborum asperiores, magnam, deserunt,
                      impedit eveniet dolores non placeat aut recusandae.
                      Maxime, cupiditate. Similique obcaecati aliquid amet odio.
                      Magnam perferendis tenetur temporibus adipisci. Adipisci,
                      debitis sit veniam possimus sed, natus. Molestias possimus
                      rerum laborum quasi, voluptas quidem assumenda sapiente
                      vero.
                    </p>
                  </div>
                  <div id="third-tab-2" role="tabpanel" className="tab-pane">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Alias blanditiis porro nobis non qui, excepturi deserunt
                      fugiat est quos vitae vero laboriosam hic quis, aliquam
                      tempore odio sint, distinctio libero. Officia sit esse
                      dolorum excepturi perferendis? Voluptatibus iste a illum
                      dolorem nam odit sequi reiciendis explicabo ullam pariatur
                      facilis eos consequatur, perspiciatis!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* end of row*/}
          </div>
          {/* end of section content*/}
        </div>
        {/* end of container*/}
      </section>
    </>
  );
};

export default Dashboard;
