import { Certificate, PageTitle } from "../components/components.js";
import { containerStyle } from "./styles.js";
import { CertificatesPage } from "../assets/assets.js";

const Certificates = () => {
  return (
    <>
      {(CertificatesPage && CertificatesPage.length > 0) && (
        <div id="Certificates" className={`${containerStyle}`}>
          <PageTitle title={"Certificates"} />
          <div>
            <div className="flex gap-3 flex-nowrap overflow-x-auto overflow-y-hidden custom-scrollbar">
              {CertificatesPage.map(
                ({ img, title, description, issuedBy, credentialURL }) => (
                  <Certificate
                    key={1}
                    isFlexShrink={true}
                    img={img}
                    title={title}
                    description={description}
                    issuedBy={issuedBy}
                    credentialURL={credentialURL}
                  />
                )
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Certificates;
