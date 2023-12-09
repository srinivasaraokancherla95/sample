import React, {createContext} from 'react'
import ComponentB from './ComponentB'
export const context = createContext()

export default function ComponentA() {
  return (
    <context.Provider value={"Entri"}>
    <div>
        ComponentA
        <ComponentB/>
        
        </div>
        </context.Provider>
  )
}
