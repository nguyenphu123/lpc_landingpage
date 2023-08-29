import Breadcrumbs from "@/components/Breadcrumbs";
const PageHeader = ({ title }: { title: string }) => {
  return (
    <section>
      <div className="container text-center mt-14" >
        <div className="rounded-2xl bg-gradient-to-b from-body to-theme-light px-8 py-14 dark:from-darkmode-body dark:to-darkmode-theme-light">
          <h1>{title.toUpperCase()}</h1>
          {/* <Breadcrumbs className="mt-6" /> */}
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
