import React from 'react'
import { withBaseIcon } from 'react-icons-kit'
import { basic_world }from "react-icons-kit/linea/basic_world"
import { basic_compass } from "react-icons-kit/linea/basic_compass"
import { basic_heart } from "react-icons-kit/linea/basic_heart"
import { basic_map } from "react-icons-kit/linea/basic_map"

//lets say the icons on your side navigation are all color red
const SideIconContainer = 
    withBaseIcon({ size: 64, style: {color: 'green' }})

export const BasicWorld = () => <SideIconContainer icon={basic_world}/>
export const BasicCompass = () => <SideIconContainer icon={basic_compass}/>
export const BasicHeart = () => <SideIconContainer icon={basic_heart}/>
export const BasisMap = () => <SideIconContainer icon={basic_map}/>
