/*
Model License

Author: Mantichore Studio (https://sketchfab.com/mantichore-studio)
License: SKETCHFAB Standard (https://sketchfab.com/licenses)
Source: https://sketchfab.com/3d-models/victorian-work-desk-openable-a231f68bf997435c855e36d542f07139
Title: Victorian work desk (openable)
*/

import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { useThree } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    SM_victorian_desk_2_MI_victorian_dressing_table_atlas_0: THREE.Mesh;
    SM_victorian_dressing_table_door_5_MI_victorian_dressing_table_props_atlas_0: THREE.Mesh;
    SM_victorian_dressing_table_drawer_big_9_MI_victorian_dressing_table_props_atlas_0: THREE.Mesh;
    SM_quill_a2_MI_inkwell_quill_a_atlas_0: THREE.Mesh;
    SM_quill_a3_MI_inkwell_quill_a_atlas_0: THREE.Mesh;
    SM_quill_a4_MI_inkwell_quill_a_atlas_0: THREE.Mesh;
    SM_inkwell_a2_MI_inkwell_quill_a_atlas_0: THREE.Mesh;
    SM_victorian_dressing_table_drawer_middle_12_MI_victorian_dressing_table_props_atlas_0: THREE.Mesh;
    SM_book_c_b_set_5_MI_book_c_b_set_I_atlas_0: THREE.Mesh;
    SM_victorian_dressing_table_drawer_middle2_MI_victorian_dressing_table_props_atlas2_0: THREE.Mesh;
    SM_sheet_of_paper_c_a_18_MI_stock_paper_c_atlas_0: THREE.Mesh;
    SM_inkwell_a_20_MI_inkwell_quill_a_atlas_0: THREE.Mesh;
    SM_quill_a_22_MI_inkwell_quill_a_atlas_0: THREE.Mesh;
    SM_shelf_of_books_a_25_MI_shelf_of_books_a_atlas_0: THREE.Mesh;
    SM_stock_paper_d_34_MI_stock_paper_a_atlas_0: THREE.Mesh;
    SM_stock_paper_c_37_MI_stock_paper_b_atlas_0: THREE.Mesh;
    SM_books_group_a14_46_MI_book_a_a_set_I_atlas_0: THREE.Mesh;
    SM_bookends_49_MI_bookends_0: THREE.Mesh;
    SM_book_a_c_set_2_MI_book_a_c_set_I_atlas_0: THREE.Mesh;
    SM_book_b_b_set_5_MI_book_b_b_set_I_atlas_0: THREE.Mesh;
    SM_map_e_24_MI_map_a_atlas_0: THREE.Mesh;
    BP_oil_lamp_a_2_MI_gothic_oil_lamp_a_atlas_0: THREE.Mesh;
    BP_oil_lamp_a_2_MI_gothic_oil_lamp_glass_atlas_0: THREE.Mesh;
    SM_book_open_d_6_MI_book_d_a_set_I_atlas_0: THREE.Mesh;
    SM_book_open_d_6_MI_book_open_page_b_atlas_0: THREE.Mesh;
    SM_book_open_a_9_MI_book_open_a_0: THREE.Mesh;
    SM_victorian_dressing_table_door_right_16_MI_victorian_dressing_table_props_atlas_0: THREE.Mesh;
  };
  materials: {
    MI_victorian_dressing_table_atlas: THREE.MeshStandardMaterial;
    MI_victorian_dressing_table_props_atlas: THREE.MeshStandardMaterial;
    MI_inkwell_quill_a_atlas: THREE.MeshStandardMaterial;
    MI_book_c_b_set_I_atlas: THREE.MeshStandardMaterial;
    MI_victorian_dressing_table_props_atlas2: THREE.MeshStandardMaterial;
    MI_stock_paper_c_atlas: THREE.MeshStandardMaterial;
    MI_shelf_of_books_a_atlas: THREE.MeshStandardMaterial;
    MI_stock_paper_a_atlas: THREE.MeshStandardMaterial;
    MI_stock_paper_b_atlas: THREE.MeshStandardMaterial;
    MI_book_a_a_set_I_atlas: THREE.MeshStandardMaterial;
    MI_bookends: THREE.MeshStandardMaterial;
    MI_book_a_c_set_I_atlas: THREE.MeshStandardMaterial;
    MI_book_b_b_set_I_atlas: THREE.MeshStandardMaterial;
    MI_map_a_atlas: THREE.MeshStandardMaterial;
    MI_gothic_oil_lamp_a_atlas: THREE.MeshStandardMaterial;
    MI_gothic_oil_lamp_glass_atlas: THREE.MeshPhysicalMaterial;
    MI_book_d_a_set_I_atlas: THREE.MeshStandardMaterial;
    MI_book_open_page_b_atlas: THREE.MeshStandardMaterial;
    MI_book_open_a: THREE.MeshStandardMaterial;
  };
};

type ActionName = "Scene";
interface GLTFActions extends THREE.AnimationClip {
  animations: ActionName[];
}
interface DeskResult extends GLTFResult {
  actions: GLTFActions;
}

export function Desk(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>(null);
  const { nodes, materials, animations } = useGLTF(
    "/victorian_work_desk_openable.glb"
  ) as GLTFResult;
  const { actions } = useAnimations(animations, group);
  const { camera } = useThree();

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={[0, -500, -300]}
      scale={1000}
    >
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="12b5e0b2b3274b0f8e3d17f6001b3c43fbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="SM_victorian_desk_2"
                  rotation={[-Math.PI / 2, 0, 0]}
                >
                  <mesh
                    name="SM_victorian_desk_2_MI_victorian_dressing_table_atlas_0"
                    castShadow
                    receiveShadow
                    geometry={
                      nodes
                        .SM_victorian_desk_2_MI_victorian_dressing_table_atlas_0
                        .geometry
                    }
                    material={materials.MI_victorian_dressing_table_atlas}
                  />
                </group>
                <group
                  name="SM_victorian_dressing_table_door_5"
                  position={[-78.258, 13.345, 39.311]}
                  rotation={[-Math.PI / 2, 0, -0.019]}
                >
                  <mesh
                    name="SM_victorian_dressing_table_door_5_MI_victorian_dressing_table_props_atlas_0"
                    castShadow
                    receiveShadow
                    geometry={
                      nodes
                        .SM_victorian_dressing_table_door_5_MI_victorian_dressing_table_props_atlas_0
                        .geometry
                    }
                    material={materials.MI_victorian_dressing_table_props_atlas}
                  />
                </group>
                <group
                  name="SM_victorian_dressing_table_drawer_big_9"
                  position={[0, 76.172, 19.374]}
                  rotation={[-Math.PI / 2, 0, 0]}
                >
                  <mesh
                    name="SM_victorian_dressing_table_drawer_big_9_MI_victorian_dressing_table_props_atlas_0"
                    castShadow
                    receiveShadow
                    geometry={
                      nodes
                        .SM_victorian_dressing_table_drawer_big_9_MI_victorian_dressing_table_props_atlas_0
                        .geometry
                    }
                    material={materials.MI_victorian_dressing_table_props_atlas}
                  />
                  <group
                    name="SM_quill_a2"
                    position={[-16.277, -12.926, 3.293]}
                    rotation={[-1.635, 0.713, 3.053]}
                  >
                    <mesh
                      name="SM_quill_a2_MI_inkwell_quill_a_atlas_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.SM_quill_a2_MI_inkwell_quill_a_atlas_0.geometry
                      }
                      material={materials.MI_inkwell_quill_a_atlas}
                    />
                  </group>
                  <group
                    name="SM_quill_a3"
                    position={[-13.524, -11.131, 3.154]}
                    rotation={[-1.425, 0.252, 0.177]}
                  >
                    <mesh
                      name="SM_quill_a3_MI_inkwell_quill_a_atlas_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.SM_quill_a3_MI_inkwell_quill_a_atlas_0.geometry
                      }
                      material={materials.MI_inkwell_quill_a_atlas}
                    />
                  </group>
                  <group
                    name="SM_quill_a4"
                    position={[-9.798, -11.981, 2.333]}
                    rotation={[-1.497, 0.805, 2.936]}
                  >
                    <mesh
                      name="SM_quill_a4_MI_inkwell_quill_a_atlas_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.SM_quill_a4_MI_inkwell_quill_a_atlas_0.geometry
                      }
                      material={materials.MI_inkwell_quill_a_atlas}
                    />
                  </group>
                  <group
                    name="SM_inkwell_a2"
                    position={[16.427, 0.249, 3.245]}
                    rotation={[0.051, 0, -0.592]}
                    scale={0.8}
                  >
                    <mesh
                      name="SM_inkwell_a2_MI_inkwell_quill_a_atlas_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.SM_inkwell_a2_MI_inkwell_quill_a_atlas_0.geometry
                      }
                      material={materials.MI_inkwell_quill_a_atlas}
                    />
                  </group>
                </group>
                <group
                  name="SM_victorian_dressing_table_drawer_middle_12"
                  position={[-59.792, 76.172, 19.374]}
                  rotation={[-Math.PI / 2, 0, 0]}
                >
                  <mesh
                    name="SM_victorian_dressing_table_drawer_middle_12_MI_victorian_dressing_table_props_atlas_0"
                    castShadow
                    receiveShadow
                    geometry={
                      nodes
                        .SM_victorian_dressing_table_drawer_middle_12_MI_victorian_dressing_table_props_atlas_0
                        .geometry
                    }
                    material={materials.MI_victorian_dressing_table_props_atlas}
                  />
                  <group
                    name="SM_book_c_b_set_5"
                    position={[17.661, -1.215, 4.793]}
                    rotation={[1.571, -1.569, 1.571]}
                  >
                    <mesh
                      name="SM_book_c_b_set_5_MI_book_c_b_set_I_atlas_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.SM_book_c_b_set_5_MI_book_c_b_set_I_atlas_0
                          .geometry
                      }
                      material={materials.MI_book_c_b_set_I_atlas}
                    />
                  </group>
                </group>
                <group
                  name="SM_victorian_dressing_table_drawer_middle2"
                  position={[59.825, 76.172, 19.374]}
                  rotation={[-Math.PI / 2, 0, 0]}
                >
                  <mesh
                    name="SM_victorian_dressing_table_drawer_middle2_MI_victorian_dressing_table_props_atlas2_0"
                    castShadow
                    receiveShadow
                    geometry={
                      nodes
                        .SM_victorian_dressing_table_drawer_middle2_MI_victorian_dressing_table_props_atlas2_0
                        .geometry
                    }
                    material={
                      materials.MI_victorian_dressing_table_props_atlas2
                    }
                  />
                  <group
                    name="SM_sheet_of_paper_c_a_18"
                    position={[-0.404, -3.735, 2.542]}
                    rotation={[0, 0, -0.407]}
                  >
                    <mesh
                      name="SM_sheet_of_paper_c_a_18_MI_stock_paper_c_atlas_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.SM_sheet_of_paper_c_a_18_MI_stock_paper_c_atlas_0
                          .geometry
                      }
                      material={materials.MI_stock_paper_c_atlas}
                    />
                  </group>
                </group>
                <group
                  name="SM_inkwell_a_20"
                  position={[-1.527, 96.382, -28.163]}
                  rotation={[-Math.PI / 2, 0, 0]}
                >
                  <mesh
                    name="SM_inkwell_a_20_MI_inkwell_quill_a_atlas_0"
                    castShadow
                    receiveShadow
                    geometry={
                      nodes.SM_inkwell_a_20_MI_inkwell_quill_a_atlas_0.geometry
                    }
                    material={materials.MI_inkwell_quill_a_atlas}
                  />
                </group>
                <group
                  name="SM_quill_a_22"
                  position={[-1.527, 99.309, -28.163]}
                  rotation={[-Math.PI / 2, 0.175, 0]}
                >
                  <mesh
                    name="SM_quill_a_22_MI_inkwell_quill_a_atlas_0"
                    castShadow
                    receiveShadow
                    geometry={
                      nodes.SM_quill_a_22_MI_inkwell_quill_a_atlas_0.geometry
                    }
                    material={materials.MI_inkwell_quill_a_atlas}
                  />
                </group>
                <group
                  name="SM_shelf_of_books_a_25"
                  position={[-33.221, 94.844, -26.72]}
                  rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                >
                  <mesh
                    name="SM_shelf_of_books_a_25_MI_shelf_of_books_a_atlas_0"
                    castShadow
                    receiveShadow
                    geometry={
                      nodes.SM_shelf_of_books_a_25_MI_shelf_of_books_a_atlas_0
                        .geometry
                    }
                    material={materials.MI_shelf_of_books_a_atlas}
                  />
                </group>
                <group
                  name="SM_stock_paper_d_34"
                  position={[-80.783, 105.408, -28.638]}
                  rotation={[-1.571, 0.833, 1.571]}
                >
                  <mesh
                    name="SM_stock_paper_d_34_MI_stock_paper_a_atlas_0"
                    castShadow
                    receiveShadow
                    geometry={
                      nodes.SM_stock_paper_d_34_MI_stock_paper_a_atlas_0
                        .geometry
                    }
                    material={materials.MI_stock_paper_a_atlas}
                  />
                </group>
                <group
                  name="SM_stock_paper_c_37"
                  position={[-3.817, 94.844, 20.781]}
                  rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                >
                  <mesh
                    name="SM_stock_paper_c_37_MI_stock_paper_b_atlas_0"
                    castShadow
                    receiveShadow
                    geometry={
                      nodes.SM_stock_paper_c_37_MI_stock_paper_b_atlas_0
                        .geometry
                    }
                    material={materials.MI_stock_paper_b_atlas}
                  />
                </group>
                <group
                  name="SM_books_group_a14_46"
                  position={[-48.269, 96.344, -28.156]}
                  rotation={[-Math.PI / 2, 0, 0]}
                >
                  <mesh
                    name="SM_books_group_a14_46_MI_book_a_a_set_I_atlas_0"
                    castShadow
                    receiveShadow
                    geometry={
                      nodes.SM_books_group_a14_46_MI_book_a_a_set_I_atlas_0
                        .geometry
                    }
                    material={materials.MI_book_a_a_set_I_atlas}
                  />
                </group>
                <group
                  name="SM_bookends_49"
                  position={[-24.87, 96.344, -26.509]}
                  rotation={[-Math.PI / 2, 0, Math.PI]}
                >
                  <mesh
                    name="SM_bookends_49_MI_bookends_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.SM_bookends_49_MI_bookends_0.geometry}
                    material={materials.MI_bookends}
                  />
                </group>
                <group
                  name="SM_book_a_c_set_2"
                  position={[-57.663, 15.002, 14.176]}
                  rotation={[-Math.PI / 2, 0.547, 0]}
                  scale={0.875}
                >
                  <mesh
                    name="SM_book_a_c_set_2_MI_book_a_c_set_I_atlas_0"
                    castShadow
                    receiveShadow
                    geometry={
                      nodes.SM_book_a_c_set_2_MI_book_a_c_set_I_atlas_0.geometry
                    }
                    material={materials.MI_book_a_c_set_I_atlas}
                  />
                </group>
                <group
                  name="SM_book_b_b_set_5"
                  position={[-65.156, 14.643, 11.011]}
                  rotation={[-Math.PI / 2, 0.55, 0]}
                  scale={0.875}
                >
                  <mesh
                    name="SM_book_b_b_set_5_MI_book_b_b_set_I_atlas_0"
                    castShadow
                    receiveShadow
                    geometry={
                      nodes.SM_book_b_b_set_5_MI_book_b_b_set_I_atlas_0.geometry
                    }
                    material={materials.MI_book_b_b_set_I_atlas}
                  />
                </group>
                <group
                  name="SM_map_e_24"
                  position={[58.489, 45.384, 19.757]}
                  rotation={[-Math.PI / 2, 0, 1.83]}
                  scale={0.625}
                >
                  <mesh
                    name="SM_map_e_24_MI_map_a_atlas_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.SM_map_e_24_MI_map_a_atlas_0.geometry}
                    material={materials.MI_map_a_atlas}
                  />
                </group>
                <group
                  name="BP_oil_lamp_a_2"
                  position={[67.15, 94.844, -23.135]}
                  rotation={[-Math.PI / 2, 0, 0]}
                >
                  <mesh
                    name="BP_oil_lamp_a_2_MI_gothic_oil_lamp_a_atlas_0"
                    castShadow
                    receiveShadow
                    geometry={
                      nodes.BP_oil_lamp_a_2_MI_gothic_oil_lamp_a_atlas_0
                        .geometry
                    }
                    material={materials.MI_gothic_oil_lamp_a_atlas}
                  />
                  <mesh
                    name="BP_oil_lamp_a_2_MI_gothic_oil_lamp_glass_atlas_0"
                    castShadow
                    receiveShadow
                    geometry={
                      nodes.BP_oil_lamp_a_2_MI_gothic_oil_lamp_glass_atlas_0
                        .geometry
                    }
                    material={materials.MI_gothic_oil_lamp_glass_atlas}
                  />
                </group>
                <group
                  name="SM_book_open_d_6"
                  position={[-54.691, 93.761, 15.82]}
                  rotation={[-Math.PI / 2, 0, Math.PI / 6]}
                >
                  <mesh
                    name="SM_book_open_d_6_MI_book_d_a_set_I_atlas_0"
                    castShadow
                    receiveShadow
                    geometry={
                      nodes.SM_book_open_d_6_MI_book_d_a_set_I_atlas_0.geometry
                    }
                    material={materials.MI_book_d_a_set_I_atlas}
                  />
                  <mesh
                    name="SM_book_open_d_6_MI_book_open_page_b_atlas_0"
                    castShadow
                    receiveShadow
                    geometry={
                      nodes.SM_book_open_d_6_MI_book_open_page_b_atlas_0
                        .geometry
                    }
                    material={materials.MI_book_open_page_b_atlas}
                  />
                </group>
                <group
                  name="SM_book_open_a_9"
                  position={[44.852, 94.853, 13.709]}
                  rotation={[-Math.PI / 2, 0, 0.698]}
                >
                  <mesh
                    name="SM_book_open_a_9_MI_book_open_a_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.SM_book_open_a_9_MI_book_open_a_0.geometry}
                    material={materials.MI_book_open_a}
                  />
                </group>
                <group
                  name="SM_victorian_dressing_table_door_right_16"
                  position={[78.23, 13.345, 39.311]}
                  rotation={[-Math.PI / 2, 0, 0]}
                >
                  <mesh
                    name="SM_victorian_dressing_table_door_right_16_MI_victorian_dressing_table_props_atlas_0"
                    castShadow
                    receiveShadow
                    geometry={
                      nodes
                        .SM_victorian_dressing_table_door_right_16_MI_victorian_dressing_table_props_atlas_0
                        .geometry
                    }
                    material={materials.MI_victorian_dressing_table_props_atlas}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/victorian_work_desk_openable.glb");
