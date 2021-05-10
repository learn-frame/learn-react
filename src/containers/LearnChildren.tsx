import { FC, Children, useEffect } from 'react'

const SomeComponent: FC = ({ children }) => {
  useEffect(() => {
    console.log(children)
    console.log(Children.map(children, (c) => '123'))
  }, [children])

  return <div>{children}</div>
}

// Children 可以是 ReactNode, 数字, 字符串, Set, 数组
// undefined 和 boolean 类型被转成了 null
// 但不能是 Map, Functions, 普通对象, 其中如果是「普通对象」, 直接崩溃, 前两个会给予控制台警告
const LearnChildren: FC = () => {
  return (
    <SomeComponent>
      <span>
        <span>1-1</span>
        <span>1-2</span>
      </span>
      <span>2</span>

      <pre>
      docker run \
        -d \
        -p 127.0.0.1:9090:9090 \
        --name prometheus \
        -v /opt/prometheus/prometheus.yml:/etc/prometheus/prometheus.yml \
        -v /opt/prometheus/alert_rules.yml:/etc/prometheus/alert_rules.yml \
        prom/prometheus --web.external-url=http://localhost:19090 --web.route-prefix="/" --config.file=/etc/prometheus/prometheus.yml


docker run \
    -d \
    -p 127.0.0.1:9093:9093 \
    --name alertmanager \
    -v /opt/prometheus/alertmanager.yml:/etc/alertmanager/alertmanager.yml \
    prom/alertmanager --web.external-url=http://localhost:19093 --web.route-prefix="/" --config.file=/etc/alertmanager/alertmanager.yml

docker run -d -p 9100:9100 --name node-exporter prom/node-exporter

sudo docker run -v /etc/nginx/.ht.passwd:/etc/nginx/.ht.passwd \
    --restart=always  \
    --privileged=true \
    --volume=/cgroup:/cgroup:ro \
    --volume=/:/rootfs:ro \
    --volume=/var/run:/var/run:rw \
    --volume=/sys:/sys:ro \
    --volume=/var/lib/docker/:/var/lib/docker:ro \
    --publish=9094:8080 \
    --detach=true \
    --name=cadvisor \
    google/cadvisor:latest --http_auth_file /etc/nginx/.ht.passwd --http_auth_realm localhost



    docker run \
-d \
-p 9090:9090 \
--name prometheus \
-v /opt/prometheus/prometheus.yml:/etc/prometheus/prometheus.yml \
-v /opt/prometheus/alert_rules.yml:/etc/prometheus/alert_rules.yml \
prom/prometheus 


docker run \
    -d \
    -p 9093:9093 \
    --name alertmanager \
    -v /opt/prometheus/alertmanager.yml:/etc/alertmanager/alertmanager.yml \
    prom/alertmanager
      </pre>
    </SomeComponent>
  )
}

export default LearnChildren
