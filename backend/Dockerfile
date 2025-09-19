# Use Java 22 as the base image (has JDK installed)
FROM openjdk:22-jdk

# Set working directory inside the container
WORKDIR /app

# Copy the generated JAR file from target/ into the container
COPY target/*.jar app.jar

# Command to run the Spring Boot app when container starts
ENTRYPOINT ["java", "-jar", "app.jar"]
