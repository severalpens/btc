import React from 'react'

export default function FormArtifact(props) {
  return (
    <div>
      <label htmlFor="artifact">Artifact JSON file</label>
      <br />
      <input type="file" id="artifact" name="artifact" accept=".json" onChange={e => props.handleFileChosen((e.target)?.files?.[0])} />
    </div>
  )
}
