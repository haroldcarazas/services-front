function TableServices({ role, services }) {
  console.log(services);
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Descripción</th>
          <th>Evidencia</th>
          <th>Reportado</th>
          <th>Aprobado</th>
        </tr>
      </thead>
      <tbody>
        {services.map(s => (
          <tr key={s.id}>
            <td>{s.id}</td>
            <td>{s.description}</td>
            <td>
              <button>Ver</button>
            </td>
            <td>{s.amount_reported}</td>
            <td>
              {role === 'Admin' ? (
                <input type='number' defaultValue={s.amount_approved || 0} />
              ) : (
                s.amount_approved || 0
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableServices;
