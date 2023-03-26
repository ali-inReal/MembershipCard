import React from 'react'

export const Text = ({ font, textColor, textMaterial, memberRank, memberId, joinDate, memberName, location, actOfKindness }) => {



    return (
        <>
            <mesh name="backText1" material-color={textColor ? textColor : ""} material={textMaterial} position={[1.05, -0.04, 1.49]} rotation={[-Math.PI / 2, Math.PI, 0]}  >
                <textGeometry args={[memberName, { font, size: 0.15, height: 0.04, bewelThickness: 0.015, bewelSize: 0.003 }]} />
            </mesh>
            <mesh name="backText2" material={textMaterial} position={[1.05, -0.05, 1.63]} rotation={[-Math.PI / 2, Math.PI, 0]} >
                <textGeometry args={[memberRank + " Member", { font, size: 0.09, height: 0.04, bewelThickness: 0.015, bewelSize: 0.003 }]} />
            </mesh>
            <mesh name="BackText3" material={textMaterial} position={[1.05, -0.05, 1.75]} rotation={[-Math.PI / 2, Math.PI, 0]}  >
                <textGeometry args={["Joined " + joinDate, { font, size: 0.09, height: 0.04, bewelThickness: 0.015, bewelSize: 0.003 }]} />
            </mesh>
            <mesh name="backText4" material={textMaterial} position={[1.05, -0.05, 1.87]} rotation={[-Math.PI / 2, Math.PI, 0]} >
                <textGeometry args={["Memer Id #  " + memberId, { font, size: 0.09, height: 0.04, bewelThickness: 0.015, bewelSize: 0.003 }]} />
            </mesh>
            <mesh name="forwardText2" rotation={[4.6, 0, 0]} material={textMaterial} position={[-1.03, 0.04, 1.51]}  >
                <textGeometry args={[memberName, { font, size: 0.15, height: 0.04, bewelThickness: 0.015, bewelSize: 0.003 }]} />
            </mesh>
            <mesh name="forwardText3" rotation={[4.6, 0, 0]} material={textMaterial} position={[-1.03, 0.04, 1.65]}  >
                <textGeometry args={[location, { font, size: 0.1, height: 0.04, bewelThickness: 0.015, bewelSize: 0.003 }]} />
            </mesh>
            <mesh name="forwardText4" rotation={[4.6, 0, 0]} material={textMaterial} position={[-1.03, 0.04, 1.77]}  >
                <textGeometry args={[actOfKindness, { font, size: 0.1, height: 0.04, bewelThickness: 0.015, bewelSize: 0.003 }]} />
            </mesh>

        </>
    )
}
