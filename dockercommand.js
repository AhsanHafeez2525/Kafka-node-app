// 1) Start Zookeper Container and expose PORT 2181.
// cmd 1
// docker run -p 2181:2181 zookeeper

// 2) Start Kafka Container, expose PORT 9092 and setup ENV variables.
// cmd 2
// docker run -p 9092:9092 -e KAFKA_ZOOKEEPER_CONNECT=192.168.100.15:2181 -e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://192.168.100.15:9092 -e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 confluentinc/cp-kafka
