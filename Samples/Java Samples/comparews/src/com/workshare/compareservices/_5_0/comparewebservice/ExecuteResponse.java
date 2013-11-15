/**
 * ExecuteResponse.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package com.workshare.compareservices._5_0.comparewebservice;

public class ExecuteResponse  implements java.io.Serializable {
    private com.workshare.compareservices._5_0.comparewebservice.CompareResults executeResult;

    public ExecuteResponse() {
    }

    public ExecuteResponse(
           com.workshare.compareservices._5_0.comparewebservice.CompareResults executeResult) {
           this.executeResult = executeResult;
    }


    /**
     * Gets the executeResult value for this ExecuteResponse.
     * 
     * @return executeResult
     */
    public com.workshare.compareservices._5_0.comparewebservice.CompareResults getExecuteResult() {
        return executeResult;
    }


    /**
     * Sets the executeResult value for this ExecuteResponse.
     * 
     * @param executeResult
     */
    public void setExecuteResult(com.workshare.compareservices._5_0.comparewebservice.CompareResults executeResult) {
        this.executeResult = executeResult;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof ExecuteResponse)) return false;
        ExecuteResponse other = (ExecuteResponse) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.executeResult==null && other.getExecuteResult()==null) || 
             (this.executeResult!=null &&
              this.executeResult.equals(other.getExecuteResult())));
        __equalsCalc = null;
        return _equals;
    }

    private boolean __hashCodeCalc = false;
    public synchronized int hashCode() {
        if (__hashCodeCalc) {
            return 0;
        }
        __hashCodeCalc = true;
        int _hashCode = 1;
        if (getExecuteResult() != null) {
            _hashCode += getExecuteResult().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(ExecuteResponse.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://workshare.com/compareservices/5.0/comparewebservice/", ">ExecuteResponse"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("executeResult");
        elemField.setXmlName(new javax.xml.namespace.QName("http://workshare.com/compareservices/5.0/comparewebservice/", "ExecuteResult"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://workshare.com/compareservices/5.0/comparewebservice/", "CompareResults"));
        elemField.setMinOccurs(0);
        elemField.setNillable(true);
        typeDesc.addFieldDesc(elemField);
    }

    /**
     * Return type metadata object
     */
    public static org.apache.axis.description.TypeDesc getTypeDesc() {
        return typeDesc;
    }

    /**
     * Get Custom Serializer
     */
    public static org.apache.axis.encoding.Serializer getSerializer(
           java.lang.String mechType, 
           java.lang.Class _javaType,  
           javax.xml.namespace.QName _xmlType) {
        return 
          new  org.apache.axis.encoding.ser.BeanSerializer(
            _javaType, _xmlType, typeDesc);
    }

    /**
     * Get Custom Deserializer
     */
    public static org.apache.axis.encoding.Deserializer getDeserializer(
           java.lang.String mechType, 
           java.lang.Class _javaType,  
           javax.xml.namespace.QName _xmlType) {
        return 
          new  org.apache.axis.encoding.ser.BeanDeserializer(
            _javaType, _xmlType, typeDesc);
    }

}
