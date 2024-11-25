import Bradcrumb from "../../components/Bradcrumb";

const Dashboard = () => {
  return (
    <>
      <Bradcrumb />

      <section>
        <div className="container">
          <div className="section-content">
            <div className="row">
              <div className="col-md-3">
                <ul role="tablist" className="admin-tabs nav nav-tabs outline">
                  <li role="presentation" className="active">
                    <a href="#first-tab-2" role="tab" data-toggle="tab">
                      First
                    </a>
                  </li>
                  <li role="presentation">
                    <a href="#second-tab-2" role="tab" data-toggle="tab">
                      Second
                    </a>
                  </li>
                  <li role="presentation">
                    <a href="#third-tab-2" role="tab" data-toggle="tab">
                      Third
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-9">Content</div>
               
         
              </div>
            </div>
            {/* end of row*/}
          </div>
          {/* end of section content*/}
        
        {/* end of container*/}
      </section>
    </>
  );
};

export default Dashboard;
