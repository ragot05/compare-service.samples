@echo off
SET TMPCLASSPATH=%CLASSPATH%
SET CFROOT=[cfroot]
SET CLASSPATH=.
SET CLASSPATH=%CLASSPATH%;%CFROOT%axis.jar
SET CLASSPATH=%CLASSPATH%;%CFROOT%axis-ant.jar
SET CLASSPATH=%CLASSPATH%;%CFROOT%jaxrpc.jar
SET CLASSPATH=%CLASSPATH%;%CFROOT%saaj.jar
SET CLASSPATH=%CLASSPATH%;%CFROOT%commons-logging-1.0.4.jar
SET CLASSPATH=%CLASSPATH%;%CFROOT%commons-discovery-0.2.jar
SET CLASSPATH=%CLASSPATH%;%CFROOT%wsdl4j-1.5.1.jar
SET CLASSPATH=%CLASSPATH%;%CFROOT%log4j-1.2.8.jar
@echo on

java org.apache.axis.wsdl.WSDL2Java -o "[JavaSrcDir]" -v [Host]?wsdl -U lnpair -P lnpair

@echo off
SET CLASSPATH=%TMPCLASSPATH%
