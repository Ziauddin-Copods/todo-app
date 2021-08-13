import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

import G6 from '@antv/g6';
import { Text } from '@chakra-ui/react';

function GraphComponent() {
  const ref = React.useRef(null);
  let graph = null;

  useEffect(() => {
    const graph = new G6.Graph({
      container: ReactDOM.findDOMNode(ref.current),
      width: 500,
      height: 500,
      layout: {
        type: 'force',
      },
      defaultNode: {
        size: 15,
      },
    });

    console.log('Graph');

    fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/relations.json')
      .then((res) => res.json())
      .then((data) => {
        graph.data({
          nodes: data.nodes,
          edges: data.edges.map(function (edge, i) {
            edge.id = 'edge' + i;
            return Object.assign({}, edge);
          }),
        });
        graph.render();

        graph.on('node:dragstart', function (e) {
          graph.layout();
          refreshDragedNodePosition(e);
        });
        graph.on('node:drag', function (e) {
          const forceLayout = graph.get('layoutController').layoutMethods[0];
          forceLayout.execute();
          refreshDragedNodePosition(e);
        });
        graph.on('node:dragend', function (e) {
          e.item.get('model').fx = null;
          e.item.get('model').fy = null;
        });

        // if (typeof window !== 'undefined')
        //   window.onresize = () => {
        //     if (!graph || graph.get('destroyed')) return;
        //     if (!container || !container.scrollWidth || !container.scrollHeight)
        //       return;
        //     graph.changeSize(container.scrollWidth, container.scrollHeight);
        //   };
      });

    function refreshDragedNodePosition(e) {
      const model = e.item.get('model');
      model.fx = e.x;
      model.fy = e.y;
    }
  }, [graph]);

  return (
    <>
      <Text
        size='lg'
        fontSize='32'
        bgGradient='Linear(to-r, green.300, green.400, green.500)'
        bgClip='text'
        m='50px 0 !important'
      >
        G6 Data Visualisation
      </Text>
      <div ref={ref}></div>
    </>
  );
}

export default GraphComponent;
