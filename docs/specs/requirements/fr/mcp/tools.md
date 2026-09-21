# Enrolled tools

- **FR-MCP-TLS-001** — The system shall list every tool registered by an enrolled module, including each tool's name, description, and input schema.
- **FR-MCP-TLS-002** — The system shall run the enrolled tool the client names and return that tool's result when the arguments match the tool's input schema.
- **FR-MCP-TLS-003** — The system shall refuse a tool call whose arguments do not match that tool's input schema, and shall return that refusal as a tool error on a completed response.
- **FR-MCP-TLS-004** — The system shall refuse a call that names a tool which is not enrolled.
