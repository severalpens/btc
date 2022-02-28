import React from 'react'

export default function FormArtifact(props) {
  return (
    <div class="mb-3 w-96">
      <label for="artifact" className="form-label inline-block mb-2 text-gray-700">Artifact</label>
      <input className="form-control
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700
                    focus:bg-white
                      focus:border-blue-600 
                      focus:outline-none
                  "
        type="file"
        id="artifact"
        name="artifact"
        accept=".json"
        onChange={e => props.handleFileChosen((e.target)?.files?.[0])}
      />
    </div>


  )
}
