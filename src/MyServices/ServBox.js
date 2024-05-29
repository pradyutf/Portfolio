

function ServBox({ service, description }) {
  return (
    <div>
      <div>
        {service}
      </div>
      <div>
        <h4>{description}</h4>
      </div>
    </div>
  );
}
export default ServBox;