let jwtToken = null;

function simulateLogin() {
  // Simular generación de Token JWT
  jwtToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxIiwicm9sZSI6IjMifQ.SimulatedJwtToken2026";
  
  // Actualizar la etiqueta de estado de autenticación
  const statusElem = document.getElementById('authStatus');
  if (statusElem) {
    statusElem.innerText = "Status: 200 Authenticated (Bearer Token)";
    statusElem.className = "text-xs px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 font-mono";
  }
  
  // Mostrar la respuesta en la consola del simulador
  const consoleElem = document.getElementById('apiConsole');
  if (consoleElem) {
    consoleElem.innerText = JSON.stringify({
      statusCode: 200,
      statusText: "OK",
      message: "Autenticación exitosa. Token JWT generado.",
      token: jwtToken,
      user: { 
        id: 1, 
        fullName: "Óscar Castañeda", 
        email: "oscarcastaeda41@gmail.com", 
        roleId: 3 
      }
    }, null, 2);
  }
}

function simulateGetTickets() {
  const consoleElem = document.getElementById('apiConsole');
  if (!consoleElem) return;

  // Si no se ha hecho login previo, devuelve error 401
  if (!jwtToken) {
    consoleElem.innerText = JSON.stringify({
      statusCode: 401,
      statusText: "Unauthorized",
      error: "Acceso denegado. Se requiere un Token Bearer JWT válido en la cabecera 'Authorization'."
    }, null, 2);
    return;
  }

  // Respuesta simulada con tickets guardados en SQLite
  consoleElem.innerText = JSON.stringify({
    statusCode: 200,
    statusText: "OK",
    data: [
      {
        id: 1,
        title: "Fallo en impresora de tickets TPV",
        description: "El puerto serie no responde al imprimir comprobantes.",
        priority: "Alta",
        status: "En Proceso",
        createdAt: "2026-10-28T12:00:00Z"
      },
      {
        id: 2,
        title: "Actualización de software de soporte",
        description: "Revisión de permisos de usuario y roles.",
        priority: "Media",
        status: "Pendiente",
        createdAt: "2026-10-29T09:30:00Z"
      }
    ]
  }, null, 2);
}